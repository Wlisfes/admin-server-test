'use strict'

/*
 * @Author: Parker 
 * @Date: 2019-03-18 16:53:06 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-18 21:08:14
 * @Types 文章操作
 */


import Router from 'koa-router'
import Tubok from '../model/tubok'
const router = Router()



//添加文章
router.get('/tubok/set', async (ctx) => {
    let ops = {
        title: 'ElementUI 之 Tree 组件切换全局 disabled',
        //描述
        descript: `到 ElementUI 2.4.8 为止，Tree 组件还不能一次性控制所有节点是否可选，这里做了实验性的尝试，在切换全局 disabled 的同时，保留每个节点原本的 disabled 状态，做到可恢复。`,
        //类型
        types: 'vuejs',
        //内容
        content: `"<pre class=\"ql-syntax\" spellcheck=\"false\">&lt;template&gt;\n  &lt;div&gt;\n    &lt;el-button @click=\"disabledAll = !disabledAll\"&gt;切换 DisabledAll &lt;/el-button&gt;\n    &lt;!-- 使用 computed 方式包装 data --&gt;\n    &lt;el-tree\n      :data=\"filtedData\"\n      show-checkbox\n      node-key=\"id\"\n      :default-expanded-keys=\"[2, 3]\"\n      :default-checked-keys=\"[5]\"&gt;\n    &lt;/el-tree&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\n// 用于递归遍历节点，并执行回调处理\nconst R = (f, s) =&gt; s.map(i =&gt; (\n  f(i), i.children &amp;&amp; i.children.length ? R(f, i.children):0, i\n))\n\nexport default {\n  data() {\n    return {\n      // 全局 disabled 开关\n      disabledAll: false,\n      data: [{\n        id: 1,\n        label: '一级 2',\n        children: [{\n          id: 3,\n          label: '二级 2-1',\n          children: [{\n            id: 4,\n            label: '三级 3-1-1'\n          }, {\n            id: 5,\n            label: '三级 3-1-2',\n            disabled: true\n          }]\n        }, {\n          id: 2,\n          label: '二级 2-2',\n          disabled: true,\n          children: [{\n            id: 6,\n            label: '三级 3-2-1'\n          }, {\n            id: 7,\n            label: '三级 3-2-2',\n            disabled: true\n          }]\n        }]\n      }],\n      defaultProps: {\n        children: 'children',\n        label: 'label'\n      }\n    };\n  },\n  computed: {\n    // 包装原 data，根据全局 disabled 开关，自动设置和清理子节点 disabled 状态\n    // 使用 _disabled 存储原 disabled 值，在全局 disabled 关闭时恢复状态\n    filtedData() {\n      if (this.disabledAll) {\n      \t// 包装，启用 _disabled 存储 disabled\n        return R(i =&gt; {\n          if (i._disabled===undefined) {\n            i._disabled = i.disabled===undefined ? false:i.disabled\n          }\n          i.disabled = true\n          }, this.data)\n      } else {\n        // 恢复 disabled，清理 _disabled\n        R(i =&gt; {\n          if (i._disabled!=undefined) {\n            i.disabled = i._disabled\n            delete i._disabled\n          }\n        }, this.data)\n        return this.data\n      }\n    }\n  }\n}\n&lt;/script&gt;\n</pre>"`,
        //未发布
        status: false,
        //缩略图
        image: 'https://avatars3.githubusercontent.com/u/10137653?s=400&v=4',
    }
    let tubok = new Tubok(ops)
    let res = await tubok.save()

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//获取全部文章
router.get('/tubok/get', async(ctx) => {
    let res = await Tubok.find({ draft: false })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//获取全部草稿
router.get('/tubok/get', async(ctx) => {
    let res = await Tubok.find({ draft: true })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//修改文章是否为草稿
router.post('/tubok/update', async(ctx) => {
    let { _id,draft } = ctx.request.body
    await Tubok.update({ _id: _id }, { draft: draft })
    let res = await Tubok.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//删除草稿
router.get('/tubok/delete', async(ctx) => {
    let { _id } = ctx.query
    await Tubok.remove({ _id: _id })
    let res = await Tubok.find({})
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



export default router