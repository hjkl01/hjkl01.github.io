import React, { useState } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "antd/dist/reset.css";
import { Button, Typography, Alert, Row, Col, Space, Card, Input, Tabs } from "antd";

function safeEval(expr: string): number | string {
  try {
    if (!/^[\d+\-*/().\s]+$/.test(expr)) {
      return "只支持数字和基本运算符";
    }
    // eslint-disable-next-line no-eval
    // @ts-ignore
    const result = eval(expr);
    if (typeof result === "number" && isFinite(result)) {
      return result;
    }
    return "表达式无效";
  } catch {
    return "表达式无效";
  }
}

const btns = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '(', ')'],
  ['C', '=', '+'],
];

export default function Calculator(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | number>('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState('keypad');

  // 按键模式
  const handleBtnClick = (val: string) => {
    if (val === 'C') {
      setInput('');
      setResult('');
      setError('');
    } else if (val === '=') {
      const res = safeEval(input);
      if (typeof res === "string" && isNaN(Number(res))) {
        setError(res);
        setResult('');
      } else {
        setError('');
        setResult(res);
      }
    } else {
      setInput(input + val);
      setError('');
      setResult('');
    }
  };

  // 手动输入模式
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError('');
    setResult('');
  };
  const handleInputCalc = () => {
    const res = safeEval(input);
    if (typeof res === "string" && isNaN(Number(res))) {
      setError(res);
      setResult('');
    } else {
      setError('');
      setResult(res);
    }
  };

  return (
    <Layout
      title={`在线计算器 | ${siteConfig.title}`}
      description="一个简单的在线四则运算计算器"
    >
      <main>
        <div style={{ padding: '20px', maxWidth: 360, margin: '0 auto' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>在线计算器</Typography.Title>
          <Card>
            <Tabs
              activeKey={tab}
              onChange={setTab}
              items={[
                {
                  key: 'keypad',
                  label: '按键模式',
                  children: (
                    <>
                      <div style={{
                        minHeight: 48,
                        fontSize: 22,
                        background: '#f5f5f5',
                        borderRadius: 4,
                        padding: '8px 12px',
                        marginBottom: 12,
                        wordBreak: 'break-all'
                      }}>
                        {input || <span style={{ color: '#aaa' }}>请输入表达式</span>}
                      </div>
                      <Space direction="vertical" style={{ width: '100%' }} size="small">
                        {btns.map((row, i) => (
                          <Row gutter={8} key={i} justify="center">
                            {row.map(btn => (
                              <Col key={btn} flex="1">
                                <Button
                                  block
                                  type={btn === '=' ? "primary" : btn === 'C' ? "default" : "default"}
                                  danger={btn === 'C'}
                                  onClick={() => handleBtnClick(btn)}
                                  style={{ height: 40, fontSize: 18 }}
                                >
                                  {btn}
                                </Button>
                              </Col>
                            ))}
                          </Row>
                        ))}
                      </Space>
                    </>
                  ),
                },
                {
                  key: 'input',
                  label: '手动输入',
                  children: (
                    <>
                      <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="请输入表达式，如 2+2*3"
                        size="large"
                        style={{ marginBottom: 12 }}
                        onPressEnter={handleInputCalc}
                        allowClear
                      />
                      <Button type="primary" block onClick={handleInputCalc} style={{ marginBottom: 8 }}>计算</Button>
                    </>
                  ),
                },
              ]}
            />
            {error && <Alert message={error} type="error" showIcon style={{ marginTop: 16 }} />}
            {result !== '' && !error && (
              <Alert
                message={`结果：${result}`}
                type="success"
                showIcon
                style={{ marginTop: 16 }}
              />
            )}
          </Card>
        </div>
        
      </main>
    </Layout>
  );
}
