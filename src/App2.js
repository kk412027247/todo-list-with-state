import React, {useState, useEffect, useCallback} from 'react';

const set = new Set();

export default () => {

  const [list, setList] = useState([0]);
  const [isMax, setIsMax] = useState(false);

  const getData = async () => {
    setList([0]);
    console.log('加载数据');
    const res = await fetch('https://www.wangluoguimi.com:8443/users/getRandomList')
    const data = await res.json();
    setList(data); //把原始数据保存到state， 或者算出最大最小值再保存到state，都可以。
  }

  // 以下为性能优化方案，减少重复在函数内部重新定义函数的性能损耗
  // const getData = useCallback( async () => {
  //   setList([0]);
  //   console.log('加载数据');
  //   const res = await fetch('https://www.wangluoguimi.com:8443/users/getRandomList')
  //   const data = await res.json();
  //   setList(data); //把原始数据保存到state， 或者算出最大最小值再保存到state，都可以。
  // },[])

  set.add(getData)

  useEffect(() => {
    console.log('页面加载了')
    getData();
    return () => {
      console.log('页面卸载了👋')
    }
  }, [])

  useEffect(() => {
    console.log('正在切换');// 只有 isMax 改变才监听变化。
  }, [isMax])

  const minMaxValue = isMax ? Math.max(...list) : Math.min(...list);

  return <div id='app2'>
    <div>原始数据：{list.map((item, index) => <span key={index}>{item},&nbsp;</span>)}</div>
    <div>最大值：{Math.max(...list)}</div>
    <div>最小值：{Math.min(...list)}</div>
    <button onClick={getData}>换一组数据</button>
    <hr/>
    <div>最<b>{isMax ? '大' : '小'}</b>值：{minMaxValue}</div>
    <button onClick={() => setIsMax(!isMax)}>切换最大最小值</button>
    <hr/>

    重复定义函数的次数: {set.size}
    <br/>

  </div>
}

