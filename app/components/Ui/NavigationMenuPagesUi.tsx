"use client"

import Link from "next/link"
import * as React from "react"
import { cn } from "../../lib/utils"
import { ListConfigType } from "../../types/ListConfig"
import { ListLayoutType } from "../../types/ListLayout"
import { ListPagesType } from "../../types/ListPages"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "./NavigationMenuUi"

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

interface ListItemConfigProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  action?: () => void;
};

interface ListItemLayoutProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  element: React.ReactNode;
  description: string;
  action?: () => void;
};

interface NavigationMenuPagesProps {
  listPages: ListPagesType[] | [];
  listConfig: ListConfigType[] | [];
  listLayout?: ListLayoutType[] | [];
};

export default function NavigationMenuPages({ listPages, listConfig, listLayout }: NavigationMenuPagesProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem className="py-1 rounded-md hover:bg-slate-100 hover:dark:bg-darkBlue-700">
          <NavigationMenuTrigger>Paginas</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-100 dark:bg-darkBlue-700">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {listPages?.map((component: ListPagesType) => (
                <Link
                  key={component.title}
                  href={component.href}
                >
                  <ListItem
                    icon={component.icon}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-1 rounded-md hover:bg-slate-100 hover:dark:bg-darkBlue-700">
          <NavigationMenuTrigger>Configuracoes</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-100 dark:bg-darkBlue-700">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {listConfig?.map((component: ListConfigType) => (
                <ListItemConfig
                  key={component.title}
                  title={component.title}
                  icon={component.icon}
                  action={component.action}
                >
                  {component.description}
                </ListItemConfig>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-1 rounded-md hover:bg-slate-100 hover:dark:bg-darkBlue-700">
          <NavigationMenuTrigger>Personalizar Layout</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-100 dark:bg-darkBlue-700">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
              {listLayout?.map((component: ListLayoutType) => (
                <ListItemLayout
                  key={component.title}
                  title={component.title}
                  element={component.element}
                  description={component.description}
                  action={component.action}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, icon, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="group-hover:text-pink-600 text-sm font-medium leading-none transition flex items-center gap-2">
            <div className="h-4 w-4">{icon}</div>
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const ListItemConfig = React.forwardRef<HTMLButtonElement, ListItemConfigProps>(({ className, action, icon, title, children, ...props }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        onClick={action}
        className={cn(
          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="group-hover:text-pink-600 text-sm font-medium leading-none transition flex items-center  gap-2">
          <div className="h-4 w-4">{icon}</div>
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-left">
          {children}
        </p>
      </button>
    </li>
  )
})
ListItemConfig.displayName = "ListItemConfig"

const ListItemLayout = React.forwardRef<HTMLButtonElement, ListItemLayoutProps>(({ className, element, action, title, description, ...props }, ref) => {
  return (
    <li>
      <button
        ref={ref}
        type="button"
        onClick={action}
        className={cn(
          "group flex gap-2 items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        {element}

        <div className="flex flex-col gap-2 text-left">
          <div className="group-hover:text-pink-600 text-sm font-medium leading-none transition flex items-center gap-2">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </div>
      </button>
    </li>
  )
})
ListItemLayout.displayName = "ListItemLayout"
