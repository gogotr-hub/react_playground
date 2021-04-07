import React from 'react';
import styles from './CSSModule.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles);

//cssmodule 자동으로 클래스명을 변환해줌
//classname 라이브러리를 사용하면 편리하게 클래스명을 매핑 할 수 있음
// ex: className={style.wrapper,{styles.inverted: false}}
// class="wrapper "

const CSSModule = () => {
    return (
        <div className={cx('wrapper','inverted')}>
            안녕하세요, 저는 <span className="something">CSSModule!</span>            
        </div>
    );
};

export default CSSModule;