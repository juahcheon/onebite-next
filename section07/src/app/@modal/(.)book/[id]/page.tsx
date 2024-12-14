import Modal from "section07/src/components/modal";
import BookPage from "../../../../app/book/[id]/page"

export default function Page(props: any) {
  return (
    <Modal>
      <BookPage {...props} />
    </Modal>
  );
}