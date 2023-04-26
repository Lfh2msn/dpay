import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = (value: number) => <CountUp end={value} separator="," />;
export const DaoStatistic = () => {
    return (
        <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} formatter={formatter} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
        </Col>
      </Row>
    )
}