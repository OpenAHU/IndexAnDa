import './App.css';
import {Button, Card, Collapse, Layout} from "antd";
import styles from './app.module.css'
import {Earth} from "@icon-park/react";

const {Panel} = Collapse;
const {Header, Content, Footer} = Layout;

function App() {
    const indexData = [
        {
            name: '最常使用', indexSet: [
                {name: '智慧安大', url: 'https://one.ahu.edu.cn/'},
                {name: '教务系统(引导界面)', url: 'https://jwxt.ahu.edu.cn/'},
                {name: '教务系统1', url: 'https://jwxt1.ahu.edu.cn/'},
                {name: '教务系统3', url: 'https://jwxt3.ahu.edu.cn/'}
            ]
        }, {
            name: '🔭科研常用', indexSet: [
                {name: '博采', url: 'https://ahu.metaersp.com/'},
            ]
        }, {
            name: '信息获取', indexSet: [
                {name: '安徽大学官网', url: 'https://www.ahu.edu.cn/'},
                {name: '安徽大学教务处', url: 'http://jwc.ahu.edu.cn/'},
                {name: '安徽大学教学与科研单位', url: 'http://www.ahu.edu.cn/183/list.htm'}
            ]
        }, {
            name: '🥰友情链接 ', indexSet: [
                {name: '安大通安卓版', url: 'https://never2.top/andriod'},
            ]
        }
    ]
    const list = [];
    let key = 0;
    for (const e of indexData) {
        const cardName = e.name;
        const cardDetail = [];
        for (const detail of e.indexSet) {
            const name = detail.name;
            const url = detail.url;
            const title = <span className={styles.singleCardTitle}>{name}</span>
            const tempDetail =
                <div className={styles.singleCard} key={name}>
                    <Card title={title} bordered={false}>
                        <div>
                            <span className={styles.cardContentUrl}>{url}</span>
                            <span className={styles.cardAccessLink}><a href={url}><Button>访问</Button></a></span>
                        </div>
                    </Card>
                </div>
            ;
            cardDetail.push(tempDetail);
        }
        const cardHead = <div className={styles.cardHead}>{cardName}</div>
        const card = <Panel header={cardHead} key={key}>
            <div className={styles.card}>
                {cardDetail}
            </div>
        </Panel>
        list.push(card);
        key++;
    }
    return (
        <div className="App">
            <Layout>
                <Header className={styles.head}>
                    <div>
                        <Earth theme="outline" size="28" fill="#ffffff"/>
                        <span className={styles.title}>INDEXANDA</span>
                    </div>
                </Header>
                <Layout className={styles.content}>
                    <Content>
                        <Collapse defaultActiveKey={[0]}>
                            {list}
                        </Collapse>
                    </Content>
                </Layout>
                <Footer className={styles.foot}>©2022 Andatong Tech Group</Footer>
            </Layout>

        </div>
    );
}

export default App;
