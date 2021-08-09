import { describle, assert } from '../src/Nest';
describle('测试nest', () => {
  const a = 1;
  const b = 2;
  const c = 1;
  assert('测试passed', a === c);
  assert('测试error', a === a + b);
})