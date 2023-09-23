
import { useEffect, useState, useCallback } from 'react'
import style from './index.less'
import { Modal, Swiper, Divider } from 'antd-mobile'
import copy from 'copy-text-to-clipboard';
import cjhy from '@/assets/img/cjhy.jpg';
import pfdl from '@/assets/img/pfdl.jpg';
import swiper1 from '@/assets/img/swiper1.png';

const Header = () => {
  return <div className="header">
    <div className="logoV">
      <img className='logo' src="https://jdtrz.com/m/skin/images/logo.png" alt="" srcset="" />
    </div>
  </div>
}
const Footer2 = (props: { wechat: any; }) => {
  const { wechat } = props
  return <div className="footer2">
    <div className="left">
      <img className='icon' src="https://jmy-pic.baidu.com/0/pic/1665120158_-1756709_-152209907.png" alt="" srcset="" />
      添加微信，相册看款
    </div>
    <div className={'wechat'} onClick={() => {
      copy(wechat);
      Modal.show({
        title: '复制成功',
        showCloseButton: true,
        content: (
          <div style={{ textAlign: 'center' }}>
            <div>微信号: {wechat}</div>
            <div>
              {/* 添加微信好友，详细了解产品 */}
              添加微信，相册看款
            </div>
          </div>
        ),
        actions: [
          {
            key: 'online',
            text: '立即前往微信加好友',
            primary: true,
            onClick: () => {
              Modal.clear()
              const aLink = document.createElement("a");
              aLink.className = 'call_up_a_link';
              aLink.href = "weixin://";
              aLink.style.cssText = "display:none;width:0px;height:0px;";
              document.body.appendChild(aLink);
              aLink.click();
            }
          },
        ]
      })
    }}>+ 添加微信</div>
  </div>
}

export default function HomePage() {
  const [wechat, setWechat] = useState('XZcx23168')
  const [showSip] = useState(true)
  const [year] = useState(new Date().getFullYear())
  const modal = useCallback(() => {
    copy(wechat);
    Modal.show({
      title: '复制成功',
      showCloseButton: true,
      content: (
        <div style={{ textAlign: 'center' }}>
          <div>微信号: {wechat}</div>
          <div>
            {/* 添加微信好友，详细了解产品 */}
            添加微信，相册看款
          </div>
        </div>
      ),
      actions: [
        {
          key: 'online',
          text: '立即前往微信加好友',
          primary: true,
          onClick: () => {
            Modal.clear()
            const aLink = document.createElement("a");
            aLink.className = 'call_up_a_link';
            aLink.href = "weixin://";
            aLink.style.cssText = "display:none;width:0px;height:0px;";
            document.body.appendChild(aLink);
            aLink.click();
          }
        },
      ]
    })
  }, [])
  return (
    <div className={style.container}>
      <Header />
      <div className="content">
        <div className="">
          <Swiper autoplay>
            <Swiper.Item key={1}>
              <div
                onClick={modal}
              >
                <img className='logo' src={swiper1} alt="" srcset="" />
              </div>
            </Swiper.Item>
            <Swiper.Item key={2}>
              <div
                onClick={modal}
              >
                <img className='logo' src={swiper1} alt="" srcset="" />
              </div>
            </Swiper.Item>
          </Swiper>
        </div>

        <div className="fwp">
          <Divider style={{
            color: '#333',
            fontSize: '20px',
            borderColor: '#999',
            borderStyle: 'dashed',
          }}>本站简介,货到付款</Divider>
          你好!欢迎来到莆田鞋官网，我是李工，莆田人氏，我在莆田鞋这个职业已经做了8个年头了，我喜欢玩鞋。
          <br />
          <br />
          <span className='cr'>卖一年好鞋，3年不愁生意，卖一年烂鞋，擦屁股3年!</span> 请记住质量和价格永远成正比的。想深入了解这个行业的朋友，可以咨询我
          <br />
          <br />
          最后祝大家 {year} 年梦想成真! 爱你们。

          <Divider style={{
            color: '#333',
            fontSize: '20px',
            borderColor: '#999',
            borderStyle: 'dashed',
          }}>名鞋展示</Divider>
        </div>
        <div className="fwp">
          {[1, 2, 3].map((it, i) => {
            return <div className="bg" key={i}
              onClick={modal}
            >
              <div className="title">运动鞋系列</div>
              <img className='xz' src="https://jdtrz.com//m/skin/images/pro2.png" alt="情侣鞋系列" />
            </div>
          })}
        </div>
        <div className="fwppp">
          <div className="left" onClick={modal}>
            <div className="title">厂家货源</div>
            <img className='cjhy' src={cjhy} alt="" />
          </div>
          <div className="right" onClick={modal}>
            <div className="title">批发代理</div>
            <img className='pfdl' src={pfdl} alt="" />
          </div>
        </div>
        <div className="cor" onClick={modal}>微信: {wechat}</div>
        <div className="cor">Copyright © 2019-2023 莆田鞋官网</div>
      </div>
      {showSip && <div className="bottom"></div>}
      <Footer2 wechat={wechat} />
    </div>
  );
}
