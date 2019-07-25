import dayjs from 'dayjs';

const formateDate = date => (date ? dayjs(date) : dayjs()).format('YYYY-MM-DD: HH:mm:ss');

/**
 * 获取url参数
 * @param url{String} 目标url
 * @param n{String} 目标参数名称;
*/
function getQueryName(n, url = window.location.href) {
  if (!n || !url) {
    throw new Error('n or url is undefined');
    return;
  }
  const query = url.match(/[^?]+/g)[1];
  if (!query) return null;
  const reg = new RegExp(`(${n}=)([^&]*)`, 'g');
  const queryArr = query.match(reg);
  let result = null;
  const resultArr = [];
  if (queryArr && Array.isArray(queryArr)) {
    queryArr.map((ele) => {
      // const key = ele.split('=')[0];
      const value = ele.split('=')[1];
      if (value !== undefined && value !== '') {
        resultArr.push(decodeURIComponent(value));
      }
    });
  }
  if (Array.isArray(resultArr)) {
    result = resultArr.length > 1 ? resultArr : resultArr.length === 1 ? resultArr[0] : null;
  }
  return result;
}
export default {
  formateDate,
  getQueryName,
};
