import React, { useState } from 'react';
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
      <main className="py-5">
        <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">在线计算器</h2>
          
          {/* Tab Navigation */}
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 font-medium text-sm ${tab === 'keypad' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setTab('keypad')}
            >
              按键模式
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${tab === 'input' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setTab('input')}
            >
              手动输入
            </button>
          </div>
          
          {/* Display Area */}
          <div className="min-h-12 text-xl bg-gray-100 rounded p-3 mb-3 break-all">
            {input || <span className="text-gray-400">请输入表达式</span>}
          </div>
          
          {/* Keypad Mode */}
          {tab === 'keypad' && (
            <div className="space-y-2">
              {btns.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((btn) => (
                    <button
                      key={btn}
                      className={`flex-1 h-10 text-lg font-medium rounded ${
                        btn === '=' 
                          ? 'bg-blue-500 text-white hover:bg-blue-600' 
                          : btn === 'C' 
                            ? 'bg-red-500 text-white hover:bg-red-600' 
                            : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      onClick={() => handleBtnClick(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
          
          {/* Manual Input Mode */}
          {tab === 'input' && (
            <div>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="请输入表达式，如 2+2*3"
                className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && handleInputCalc()}
              />
              <button 
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium mb-2"
                onClick={handleInputCalc}
              >
                计算
              </button>
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {/* Result Display */}
          {result !== '' && !error && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
              结果：{result}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}