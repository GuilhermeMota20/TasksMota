import Modal from ".";

interface ModalConfirmProps {
    text: string;
    onClose: () => void;
    onConfirm: () => void;
}

export default function ModalConfirm({ onClose, onConfirm, text }: ModalConfirmProps) {
    return (
        <Modal
            title='Você tem certeza?'
            onClose={onClose}
        >
            <p className="text-slate-500">{text}</p>

            <div className="mt-7 ml-auto">
                <button onClick={onClose}>Cancelar</button>
                <button className="ml-6 px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700" onClick={onConfirm}>Confirmar</button>
            </div>
        </Modal>
    )
}