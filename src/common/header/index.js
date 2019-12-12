import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {


    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            >

                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
                            &#xe614;
						</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className='reg'>注册</Button>

                </Addition>
            </HeaderWrapper>
        )
    }

   
}

const mapStateToProps=(state)=>{
    return {
        focused:state.focused
    }
}

const mapDispathToProps=(dispatch)=>{
    return {

    }
}
// export default Header;
export default connect(mapStateToProps,mapDispathToProps)(Header);