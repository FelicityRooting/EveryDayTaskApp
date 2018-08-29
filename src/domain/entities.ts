//在 src/domain 目录下创建 entities.ts 文件，声明List和Todo两个类：
// 我们不应该让 List 组件具有一个保存所有 List 对象的属性，根据 Demo，考虑如下几点：
//
// 在点击列表的时候，右侧只会显示属于这个列表的待办事项
// 在删除列表的时候，该列表下的待办事项也会被删除
// 右侧的标题区域会显示当前列表的标题
// 一句话来说，左右两边具有联动关系，所以我们不能让 ListComponent 来管理 List，而应当交给 ListService 来做。同理，
// Todo的管理也应当交给 TodoService。这也符合 MVC 设计模式，如果说 HTML 文件是 UI，component.ts 文件是 Controller，
// 我们就需要另外一个文件作为 Model，service 在这里就很合适。
//
// 接下来我们就来写 List Todo这两个实体类，以及相应的 ListService TodoService。
import { generateUUID } from "../utils/uuid";
export class Todo {
  _id: string;
  title: string;
  createdAt: number;
  listUUID: string;
  desc: string;
  completedFlag: boolean;
  completedAt: number;
  dueAt: number;
  planAt: number;
  notifyMe = false;

  constructor(title: string, listUUID?: string) {
    this._id = generateUUID();
    this.title = title;
    this.listUUID = listUUID;
    this.completedFlag = false;
  }
}

export class List {
  _id: string;
  title: string;
  createdAt: number;

  constructor(title: string) {
    this._id = generateUUID();
    this.title = title;
  }
}

export class Summary {
  _id: string;
  date: number;
  completedTodos: string[];
  cCount = 0;
  uncompletedTodos: string[];
  uCount = 0;

  constructor(date: number, cItems: string[], uItems: string[]) {
    this.date = date;
    this.completedTodos = cItems;
    this.uncompletedTodos = uItems;
    this.cCount = this.completedTodos.length;
    this.uCount = this.uncompletedTodos.length;
  }
}
