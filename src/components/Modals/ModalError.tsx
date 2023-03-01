import Modal from ".";

interface ModalErrorProps {
    text: string;
    onClose: () => void;
};

export default function ModalError({ onClose, text }: ModalErrorProps) {
    return (
        <>
            <Modal
                title='Opps...'
                onClose={onClose}
            >
                <p className="text-slate-500">{text}</p>

                <div className="mt-7 ml-auto">
                    <button className="ml-6 px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700" onClick={onClose}>Confirmar</button>
                </div>
            </Modal>
        </>
    )
}