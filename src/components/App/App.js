import { Layout } from 'antd';

import './App.scss';
import Logo from '../Logo';
import Filter from '../Filter';
import NumberTransfer from '../NumberTransfer';
import TicketList from '../TicketList';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <>
      <Logo />
      <Layout>
        <Sider width="232">
          <NumberTransfer />
        </Sider>
        <Layout>
          <Header>
            <Filter />
          </Header>
          <Content>
            <TicketList />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
