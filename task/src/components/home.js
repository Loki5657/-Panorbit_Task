import Reach, { useEffect, useState } from 'react'
import { AuthTypes } from '../redux/action_types/auth_types';
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card, Image, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const users = useSelector((state => state.Auth.users))
    const [userData, setUserdata] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const FetchData = () => {
        dispatch({
            type: AuthTypes.GET_USERDATA,
            callback:(error) => {
                if (error) {
                    console.log('error',error)
                    return;
                }
            },

        });
    }

    useEffect(() => {
        FetchData()
    }, [''])

    return (
        <div className='home'>
            <Card
                className='card-container'
                title="Select an account"
                bordered={false}
                style={{
                    width: 500,
                }}
            >
                {
                    users?.map((each, index) => {
                        return (
                            <div key={index} className='m-20' onClick={() => navigate(`/${each.name}`)}>
                                <Space size={16}>
                                    <Image preview={false} className='imagecic' src={each.profilepicture} />
                                    <Typography className='txt'>{each.name}</Typography>
                                </Space>
                                <hr />
                            </div>
                        );
                    })
                }
            </Card>
        </div>
    );
}
export default Home;