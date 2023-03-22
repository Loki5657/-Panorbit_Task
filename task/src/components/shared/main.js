

import { Avatar, Card, Col, Form, Image, Layout, Menu, Popconfirm, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import SimpleMap from './map';
import { UpOutlined, DownOutlined } from '@ant-design/icons'


const { Header, Content, Sider } = Layout;


const Main = (props) => {
    const [state, setState] = useState(false)
    const param = useParams()
    const users = useSelector((state) => state)
    const navigate = useNavigate();
    const data = users.Auth.users?.filter((user) => user.name === param.id)
    const onMenuItemSelect = ({ item, key }) => {
        if (key !== 'Profile') {
            alert(`${key} Coming Soon`)
        }
    };
    console.log(users);

    const ChatBox = () => {
        state ? setState(false) : setState(true)
    }

    return (
        <Layout style={{ height: 'calc(100vh)' }}>
            <Sider  >
                <Menu
                    onSelect={onMenuItemSelect}
                    mode="inline"
                    defaultSelectedKeys={['profile']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0, backgroundColor: 'blue' }}
                    items={[
                        {
                            label: 'Profile',
                            key: 'profile',
                        },
                        {
                            label: 'Gallery',
                            key: 'gallery',

                        },
                        {
                            label: 'ToDo',
                            key: 'todo',
                        },
                        {
                            label: 'Posts',
                            key: 'posts',

                        },
                    ]}
                />
            </Sider>
            <Layout >
                <Header >
                    <span className='profiletxt' >Profile</span>
                    <Space className='poptext'>

                        <Avatar src={data[0].profilepicture} />
                        <Popconfirm placement="bottom"  >
                            <Typography.Text  >{data[0].name}</Typography.Text>
                        </Popconfirm>
                    </Space>
                </Header>


                <div>
                    <Layout style={{ height: 'calc(100vh)-50px' }}>
                        <Content style={{
                            padding: 2,
                            minHeight: 300,
                            backgroundColor: 'white'
                        }}>
                            <Row>
                                <Col className="login-left" span={10} style={{ justifyContent: 'center' }}>
                                    <Form
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 16 }}
                                        layout="horizontal"
                                        style={{ paddingTop: '10px' }}
                                    >
                                        <Avatar src={data[0].profilepicture} size={150} style={{ marginLeft: '7em' }} />
                                        <h2 style={{ marginLeft: '5em' }} >{data[0].name}</h2>
                                        <Form.Item className='txt2' label="Username">
                                            <Typography.Text className='typotext'> {data[0].username}</Typography.Text>
                                        </Form.Item>
                                        <Form.Item label="e-mail">
                                            <Typography.Text className='typotext'> {data[0].email}</Typography.Text>
                                        </Form.Item>
                                        <Form.Item label="Phone">
                                            <Typography.Text className='typotext'> {data[0].phone}</Typography.Text>

                                        </Form.Item>
                                        <Form.Item label="Website">
                                            <Typography.Text className='typotext'> {data[0].website}</Typography.Text>
                                        </Form.Item>
                                        <hr style={{ width: '350px' }} />
                                        <h3 style={{ marginLeft: '8em' }}>Company</h3>
                                        <Form.Item label="Name">
                                            <Typography.Text className='typotext'> {data[0].name}</Typography.Text>

                                        </Form.Item>
                                        <Form.Item label="CatchPhrase">
                                            <Typography.Text className='typotext'> {data[0].company?.catchPhrase}</Typography.Text>

                                        </Form.Item>
                                        <Form.Item label="bs">
                                            <Typography.Text className='typotext'>
                                                {data[0].company?.bs}

                                            </Typography.Text>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <hr style={{ height: '500px', marginTop: '5%' }} />
                                <Col className="login-right" justify={"center"}
                                    align={"left"} span={12}  >

                                    <Form
                                        labelCol={{ span: 8 }}
                                        wrapperCol={{ span: 16 }}
                                        layout="horizontal"
                                    >
                                        <Typography.Text className='typotext clr'>Address:</Typography.Text>
                                        <Form.Item label="Street ">
                                            <Typography.Text className='typotext'>

                                                {data[0].address?.street}
                                            </Typography.Text>

                                        </Form.Item>
                                        <Form.Item label="Suite ">
                                            <Typography.Text className='typotext'>

                                                {data[0].address?.suite}
                                            </Typography.Text>
                                        </Form.Item>

                                        <Form.Item label="City ">
                                            <Typography.Text className='typotext'>

                                                {data[0].address?.city}
                                            </Typography.Text>
                                        </Form.Item>
                                        <Form.Item label="City ">
                                            <Typography.Text className='typotext'>
                                                {data[0].address?.city}
                                            </Typography.Text>
                                        </Form.Item>
                                        <Form.Item label="Zipcode ">
                                            <Typography.Text className='typotext'>

                                                {data[0].address?.zipcode}
                                            </Typography.Text>
                                        </Form.Item>
                                        {/* <Image src="./images/mapImage.png" alt='map' height={'17em'} width={'40em'} style={{ marginLeft: '10em' }} /> */}
                                        <SimpleMap lng={data[0].address?.geo?.lng} lat={data[0].address?.geo?.lat} />
                                        <Row justify={'end'}>
                                            <Space>
                                                <Form.Item label="Lat ">
                                                    <Typography.Text className='typotext'>
                                                        {data[0].address?.geo?.lat}
                                                    </Typography.Text>
                                                </Form.Item>
                                                <Form.Item label="Lng">
                                                    <Typography.Text className='typotext'>
                                                        {data[0].address?.geo?.lng}
                                                    </Typography.Text>
                                                </Form.Item>
                                            </Space>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </div>
            </Layout>
            <Card
                onClick={ChatBox}
                className={`chatbox ant-card-1 ${!state && 'p-0'}`}

                title="Chats"
                extra={state ? <UpOutlined /> : <DownOutlined />}
                style={{ width: 300 }}
            >
                {
                    state && users.Auth?.users.map((each, index) => {
                        return (
                            <>
                                <Space>
                                    <Avatar src={each.profilepicture} />
                                    <Typography.Text>
                                        {each.name}
                                    </Typography.Text>
                                </Space>
                                <span className={index % 2 === 0 ? 'active' : 'offline'}></span>
                            </>

                        );
                    })
                }
            </Card>
        </Layout >

    );
};
export default Main;
