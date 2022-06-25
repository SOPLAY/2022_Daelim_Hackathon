import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import Container from '@components/common/Container';
import InformationCard from './InformationCard';
import api from '@lib/api';
import Loading from '@components/common/Loading';

const Calender = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [first, setFirst] = useState(true);

  const [total, setTotal] = useState(0);
  const onClick = async (date) => {
    setLoading(true);

    await api.user
      .get({ date: new Date(date).toLocaleDateString() })
      .then((res) => {
        let sum = res.data.data.reduce(
          (acc, cur) => acc + cur.weight * cur.count * cur.set,
          0
        );
        setTotal(sum);
        setData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
    setFirst(false);
  };

  useEffect(() => {
    first && !data.length && onClick(new Date());
  });

  return (
    <div className="flex justify-center w-full h-[90%] px-10">
      <div className="flex w-1/2 h-[90%] mr-10">
        <Container>
          <div className="flex justify-center items-center h-full w-full ">
            <div className="flex justify-center items-center  w-[400px] ">
              <div className="h-[90%] relative">
                <Calendar
                  onChange={(data) => {
                    setData([]);
                    onClick(data);
                  }}
                  fullscreen={true}
                  headerRender={({ value, type, onChange, onTypeChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];
                    const current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                      current.month(i);
                      months.push(localeData.monthsShort(current));
                    }

                    for (let index = start; index < end; index++) {
                      monthOptions.push(
                        <Select.Option className="month-item" key={`${index}`}>
                          {months[index]}
                        </Select.Option>
                      );
                    }

                    const month = value.month();
                    const year = value.year();
                    const options = [];

                    for (let i = year - 10; i < year + 10; i += 1) {
                      options.push(
                        <Select.Option key={i} value={i} className="year-item">
                          {i}
                        </Select.Option>
                      );
                    }

                    return (
                      <div
                        style={{
                          padding: 15,
                        }}
                      >
                        <style jsx>{`
                          .ant-picker-calendar {
                            background: none;
                          }
                          .ant-picker-calendar .ant-picker-panel {
                            background: none;
                            font-size: 17px;
                            margin: 0;
                          }
                          .ant-picker-calendar-full
                            .ant-picker-panel
                            .ant-picker-calendar-date {
                            height: 50px;
                            margind: 0;
                          }
                        `}</style>
                        <Typography.Title level={2}>
                          Muscle Calender
                        </Typography.Title>
                        <Row gutter={8}>
                          <Col>
                            <Radio.Group
                              size="small"
                              onChange={(e) => onTypeChange(e.target.value)}
                              value={type}
                            >
                              <Radio.Button value="month">Month</Radio.Button>
                              <Radio.Button value="year">Year</Radio.Button>
                            </Radio.Group>
                          </Col>
                          <Col>
                            <Select
                              size="small"
                              dropdownMatchSelectWidth={false}
                              className="my-year-select"
                              onChange={(newYear) => {
                                const now = value.clone().year(Number(newYear));
                                onChange(now);
                              }}
                              value={String(year)}
                            >
                              {options}
                            </Select>
                          </Col>
                          <Col>
                            <Select
                              size="small"
                              dropdownMatchSelectWidth={false}
                              value={String(month)}
                              onChange={(selectedMonth) => {
                                const newValue = value.clone();
                                newValue.month(parseInt(selectedMonth, 10));
                                onChange(newValue);
                              }}
                            >
                              {monthOptions}
                            </Select>
                          </Col>
                        </Row>
                      </div>
                    );
                  }}
                  onPanelChange={onPanelChange}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-1/2 h-[90%]">
        <Container>
          <div className="px-[40px]  overflow-hidden box-border ">
            <h3>More Information</h3>
            <div className="flex flex-col items-center h-[500px] overflow-scroll pb-14">
              {isLoading ? (
                <>
                  <Loading type="calender" />
                  <Loading type="calender" />
                  <Loading type="calender" />
                  <Loading type="calender" />
                  <Loading type="calender" />
                </>
              ) : data.length ? (
                data.map((v, i) => {
                  const { name, weight, count, set } = v;

                  return (
                    <InformationCard
                      name={name}
                      weight={weight}
                      count={count}
                      set={set}
                      progress={Math.round(
                        ((weight * count * set) / total) * 100
                      )}
                      key={i}
                    />
                  );
                })
              ) : (
                <div>
                  <h4>해당 날짜에 데이터가 존재하지 않습니다.</h4>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Calender;
