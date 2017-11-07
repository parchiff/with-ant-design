import { Icon, Layout, Menu } from 'antd';

import BaseLayout from '../components/layout/BaseLayout.js';
import { stylesheet, classNames } from './styles.css'

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <BaseLayout>
        <Layout>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            collapsedWidth={0}
          >
            <div className={classNames.logo}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className={classNames.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle} />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
    <p>only this paragraph will get ddthe style :)</p>

              { /* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */ }

              <style jsx>{`
      p {
        color: red;
      }
    `}</style>
            </Content>
          </Layout>
        </Layout>
      </BaseLayout>
    );
  }
}
