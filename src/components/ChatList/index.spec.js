import React from 'react';
import { shallow } from 'enzyme';
import ChatList from './index';

describe('<ChatList>', ()=>{
  const chatMessage = [{
    messageId: '12356',
    userId: '613651251',
    fullName: 'Robin Balmforth',
    timestamp: '2016-06-03T20:24:29Z',
    email: 'robin@example.com',
    message: 'Hello, World!',
    avatar: null
  },
  {
    messageId: '123567',
    userId: '6136512517',
    fullName: 'Robin Balmforthh',
    timestamp: '2016-06-03T20:24:29Zh',
    email: 'robin6@example.com',
    message: 'Hello, World!',
    avatar: null
  }];


  it('renders without crashing', () => {
    const wrapper = shallow(<ChatList chatMessage={chatMessage}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one messages container', () => {
    const wrapper = shallow(<ChatList chatMessage={chatMessage}/>);
    expect(wrapper.find('.messages').length).toEqual(1);
  });
});