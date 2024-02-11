import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfile } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxReload } from "react-icons/rx";
import { toast } from "sonner";
import * as yup from "yup";
import Modal from ".";
import { auth } from "../../services/Firebase";
import { useListAvatars } from "../../services/hooks/useListAvatars";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";
import useToastStyleTheme from "../../services/hooks/useToastStyle";
import { IsListAvatarsType } from "../../types/User";
import Divider from "../Utilities/Divider";
import { Input } from "../Utilities/Input";
import InputGroup from "../Utilities/InputGroup";

interface ModalUserProps {
  nameForm: string;
  onClose: () => void;
};

type UpdateDataUser = {
  nameUser: string;
};

const updateUserData = yup.object().shape({
  nameUser: yup.string().required('Nome de usuario e obrigatorio.'),
});

export default function ModalUser({ nameForm, onClose }: ModalUserProps) {
  const userData = auth.currentUser;
  const mediaQueries = useScreenMedia();
  const { listAvatars } = useListAvatars();
  const toastStyle = useToastStyleTheme();

  const [avatarSelected, setAvatarSelected] = useState<IsListAvatarsType | undefined>();
  const [nameUser, setNameUser] = useState<string>(userData?.displayName);

  const { register, handleSubmit, formState: { errors } } = useForm<UpdateDataUser>({
    resolver: yupResolver(updateUserData)
  });

  const handleUpdateProfile = () => {
    onClose();

    updateProfile(userData, {
      displayName: nameUser,
      photoURL: avatarSelected?.url?.src
    }).then(() => toast.success("Usuário atualizado com sucesso!", toastStyle))
      .catch(() => toast.error("Nao foi possivel atualizar os dados de usuário! Por favor, tente novamente.", toastStyle));
  };

  return (
    <>
      <Modal
        title={nameForm}
        onClose={onClose}
      >
        <form
          className="stylesInputsField"
          onSubmit={handleSubmit(handleUpdateProfile)}
        >
          <InputGroup label="Nome de usuário">
            <Input
              type="text"
              value={nameUser}
              placeholder={`Nome atual: ${userData?.displayName}`}
              errors={errors.nameUser}
              {...register('nameUser')}
              onChange={({ target }: { target: any }) => {
                setNameUser(target.value);
              }}
            />
          </InputGroup>

          <div className="w-full mb-6">
            <Divider />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col">
              <div className="mx-auto rounded-md relative">
                <Image
                  src={avatarSelected?.url ?? userData?.photoURL}
                  alt="imageSelected"
                  height={mediaQueries?.xl ? 420 : 200}
                  width={mediaQueries?.xl ? 420 : 200}
                  className="block object-cover rounded-md"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 uppercase font-medium">Avatares disponíveis</p>
              <ul className="grid-cols-5 grid gap-2 sm:gap-3">
                {listAvatars?.map((item: IsListAvatarsType, index: number) => (
                  <li
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setAvatarSelected(item)}
                  >
                    <div className="flex-1 rounded-sm relative">
                      <Image
                        src={item?.url}
                        alt={item?.alt}
                        height={56}
                        width={56}
                        className="h-full w-full block object-cover rounded-md hover:shadow-md"
                      />
                    </div>
                  </li>
                ))}

                <li
                  className="cursor-pointer"
                  onClick={() => setAvatarSelected({ url: userData?.photoURL, alt: "" })}
                >
                  <div className="h-full w-full flex-1 rounded-md
                   relative flex items-center justify-center bg-slate-100 dark:bg-darkBlue-700 hover:shadow-md">
                    <RxReload />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            className="btn mt-5 bg-pink-600 hover:bg-pink-700 py-3 px-6 text-slate-50 rounded-lg w-full transition"
          >
            Confirmar
          </button>
        </form >
      </Modal >
    </>
  )
}