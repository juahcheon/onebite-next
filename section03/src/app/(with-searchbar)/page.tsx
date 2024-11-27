import ClientComponent from '@/components/client-component';
import styles from './page.module.css'
import ServerComponent from '../../components/server-component';

export default function Home() {
  return (
    <div>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
