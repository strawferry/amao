/*
 * @Description: 
 * @Creator: ferryvip
 * @Date: 2023-09-23 04:45:11
 */

import { useEffect, useState, useCallback } from 'react'
import style from './indexback.less'
import { Modal } from 'antd-mobile'
import copy from 'copy-text-to-clipboard';
import data from '@/assets/img/data';


const Footer1 = (props: { wechat: any; }) => {
  const { wechat } = props
  return <div className="footer">
    <div className="wechat" onClick={() => {
      copy(wechat);
      Modal.show({
        title: '复制成功',
        showCloseButton: true,
        content: (
          <div style={{ textAlign: 'center' }}>
            <div>微信号: {wechat}</div>
            <div>
              添加微信好友，详细了解产品
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
    }}>
      <svg t="1677571790998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2765" width="30" height="30"><path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="2766" fill="#ffffff"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="2767" fill="#ffffff"></path></svg>
      点击添加微信
    </div>
  </div>
}
const Footer2 = (props: { wechat: any; }) => {
  const { wechat } = props
  return <div className="footer2">
    <div className="left">
      <img className='icon' src="https://jmy-pic.baidu.com/0/pic/1665120158_-1756709_-152209907.png" alt="" srcset="" />
      品牌潮鞋，每日上新！
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
              添加微信好友，详细了解产品
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
const Footer3 = (props: { wechat: any; }) => {
  const { wechat } = props
  const openwin = (url) => {
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("id", "openwin");
    document.body.appendChild(a);
    a.click();
  }
  return <div className="footer3">
    <div className="left">
      <img className='icon' src="https://jmy-pic.baidu.com/0/pic/1665120158_-1756709_-152209907.png" alt="" srcset="" />
      <div className="">
        <div className="">品牌潮鞋</div>
        <div className="">每日上新！</div>
      </div>
    </div>
    <div className="right">
      <div className={'wechat'} onClick={() => {
        openwin('http://f.ferryvip.com:5501')
      }}>产品相册</div>
      <div className={'wechat'} onClick={() => {
        copy(wechat);
        Modal.show({
          title: '复制成功',
          showCloseButton: true,
          content: (
            <div style={{ textAlign: 'center' }}>
              <div>微信号: {wechat}</div>
              <div>
                添加微信好友，详细了解产品
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
  </div>
}
export default function HomePage() {
  const [wechat, setWechat] = useState('XZcx23168')
  const [showSip] = useState(true)
  return (
    <div className={style.container}>
      {data?.map(it => {
        if (it?.type === 'img') {
          return <img src={it?.value} alt="" className={it?.class} />
        } else if (it?.type === 'wechat') {
          return <div className="wechat_text" onClick={() => {
            copy(wechat);
            Modal.show({
              title: '复制成功',
              showCloseButton: true,
              content: (
                <div style={{ textAlign: 'center' }}>
                  <div>微信号: {wechat}</div>
                  <div>
                    添加微信好友，详细了解产品
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
                    aLink.href = "weixin://dl/business/?ticket=l69894d682fa8dbafe724a0ca3950741e";
                    aLink.style.cssText = "display:none;width:0px;height:0px;";
                    document.body.appendChild(aLink);
                    aLink.click();
                  }
                },
              ]
            })
          }}>微信号: {wechat}</div>
        } else {
          return <div className={`text ${it?.class}`}>{it?.value}</div>
        }
      })}
      {showSip && <div className="bottom"></div>}
      <Footer2 wechat={wechat} />
    </div>
  );
}
