import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import Container from '@components/common/Container';
import InformationCard from './InformationCard';
import api from '@lib/api';

const Calender = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const [data, setData] = useState([]);

  const onClick = async (date) => {
    await api.user
      .get({ date: new Date(date).toLocaleDateString() })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='flex justify-center w-full h-full px-10 mt-10'>
      <div className='flex w-1/2 h-5/6 mr-10'>
        <Container>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center h-[680px] w-[530px]'>
              <div className='h-[90%] relative'>
                <Calendar
                  onChange={(data) => onClick(data)}
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
                        <Select.Option className='month-item' key={`${index}`}>
                          {months[index]}
                        </Select.Option>
                      );
                    }

                    const month = value.month();
                    const year = value.year();
                    const options = [];

                    for (let i = year - 10; i < year + 10; i += 1) {
                      options.push(
                        <Select.Option key={i} value={i} className='year-item'>
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
                            font-size: 20px;
                            margin: 0;
                          }
                          .ant-picker-calendar-full
                            .ant-picker-panel
                            .ant-picker-calendar-date {
                            height: 70px;
                            margind: 0;
                          }
                        `}</style>
                        <Typography.Title level={2}>
                          Muscle Calender
                        </Typography.Title>
                        <Row gutter={8}>
                          <Col>
                            <Radio.Group
                              size='small'
                              onChange={(e) => onTypeChange(e.target.value)}
                              value={type}
                            >
                              <Radio.Button value='month'>Month</Radio.Button>
                              <Radio.Button value='year'>Year</Radio.Button>
                            </Radio.Group>
                          </Col>
                          <Col>
                            <Select
                              size='small'
                              dropdownMatchSelectWidth={false}
                              className='my-year-select'
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
                              size='small'
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
      <div className='w-[680px] h-[695px]'>
        <Container>
          <div className='p-[40px]'>
            <h3>More Information</h3>
            <div className='flex flex-col items-center h-[530px] overflow-scroll'>
              {data ? (
                data.map((v, i) => {
                  const { name, weight, count, set } = v;
                  console.log(name, weight, count, set);
                  return (
                    <InformationCard
                      name={name}
                      weight={weight}
                      count={count}
                      set={set}
                      key={i}
                    />
                  );
                })
              ) : (
                <div>
                  <h3>없음</h3>
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
