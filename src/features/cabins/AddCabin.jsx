import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={(e) => setIsOpenModal((isOpenModal) => !isOpenModal)}>
//         Add new cabin
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={(e) => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={(e) => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-cabin">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="add-cabin">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddCabin;
