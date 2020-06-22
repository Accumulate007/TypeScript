
// TS中引用JS书写的代码，会报错。需要使用 .d.ts 翻译文件 -> 'npm i @types/superagent -D'
import superagent from 'superagent';  // 获取html模板字符串
import cherrio from 'cheerio';  // 解析html模板，获取对应内容

import path from 'path'
import fs from 'fs'

interface Course {
  title: string,
  count: number,
}

interface CourseResult {
  time: number,
  data: Course[]
}

interface Content {
  [propName: number]: Course[]
}

class Crowller {
  private secret = 'secretKey';
  private url = 'http://www.xiepp.com/donghua/25215.html';  // 要爬取的网页

  constructor() {
    this.getRawHtml();
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    const courseResult = this.getCourseInfo(result.text);
    this.generateJsonContent(courseResult)
  }

  getCourseInfo(html:string) {
    const courseInfos: Course[] = [];
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    courseItems.map((index, element) => {
      const descs = $(element).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split(': ')[1], 10);
      courseInfos.push({
        title,
        count,
      })
    })

    const result = {
      time: new Date().getTime(),
      data: courseInfos,
    }

    return result;
  }

  generateJsonContent(courseInfo: CourseResult) {
    const filePath = path.resolve(__dirname, '../data/course.json');
    let fileContent:Content = {}
    if(fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }
}



const crowller = new Crowller();


