# 基于SpringBoot+vue的前后端分离求职招聘系统

## 使用建议
   本项目界面简洁大方，功能完善，且是主流技术SpringBoot+vue，前后端分离系统。

   在使用时注意适配运行环境，数据库数据补充以及业务逻辑的熟悉

## 项目简介
针对系统内的不同角色，系统能够赋予其不同的操作权限。招聘者和求职者可以通过此系统进行招聘和求职工作。招聘者可以在系统进行职位的发布和下架，同时可以查看收到的投递简历，对应聘简历进行筛选，对于符合招聘需求的求职者预约面试；求职者可以通过此系统进行职位查看、收藏、简历制作和投递、查看投递状况和面试情况等操作；平台管理员能够管理职位类别和对企业信息、职位进行审核。

## 技术架构
 - springboot
 
 - vue
 
 - ElementUI
 
 - Mybatis-Plus
 
 - mysql
 
## 运行说明
管理员 
root/123456 

用户初始密码均为123456

recruit-sys为后端，使用IDEA打开，导入Maven依赖后，更改数据源数据库账号密码 root/，数据库在/sql文件下

recruit-web为前端，安装node.js V12以上版本，使用yarn install安装包依赖，然后yarn run serve运行

## 项目演示

### 首页
![输入图片说明](https://foruda.gitee.com/images/1676020584800614013/998aa6b3_9956838.png "首页.png")
### 注册
![输入图片说明](recruit-sys/sql/1111.png)
### 登录
![输入图片说明](https://foruda.gitee.com/images/1676020663296989777/32ab7448_9956838.png "登录.png")
### 权限管理
![输入图片说明](https://foruda.gitee.com/images/1676020722417145351/c2c890ca_9956838.png "2权限管理.png")
### 权限管理-角色管理
![输入图片说明](https://foruda.gitee.com/images/1676020756364317781/40df1b3f_9956838.png "2权限管理-角色管理.png")
### 权限管理-添加用户
![输入图片说明](https://foruda.gitee.com/images/1676020798090539092/ffc618e4_9956838.png "2权限管理-添加用户.png")
### 企业审核认证-审核不通过
![输入图片说明](https://foruda.gitee.com/images/1676020829106159204/aaec8c86_9956838.png "3企业审核认证-审核不通过.png")
### 企业审核认证-审核通过
![输入图片说明](https://foruda.gitee.com/images/1676020840538199984/10ac0b04_9956838.png "3企业审核认证-审核通过.png")
### 职位认证审核
![输入图片说明](https://foruda.gitee.com/images/1676020858416834444/d40f2bfe_9956838.png "4职位认证审核.png")
### 职位分类管理
![输入图片说明](https://foruda.gitee.com/images/1676020923485685858/56623fb8_9956838.png "5职位分类管理.png")
### 职位管理
![输入图片说明](https://foruda.gitee.com/images/1676020906510074275/8e6d8ccc_9956838.png "6职位管理.png")
### 职位申请管理
![输入图片说明](https://foruda.gitee.com/images/1676020942620138141/72d797be_9956838.png "7职位申请管理.png")
### 我的企业
![输入图片说明](https://foruda.gitee.com/images/1676020958144490270/b9c91914_9956838.png "8我的企业.png")
### 我的简历
![输入图片说明](https://foruda.gitee.com/images/1676021000039436020/5efcf648_9956838.png "11我的简历.png")
### 投递箱
![输入图片说明](https://foruda.gitee.com/images/1676021013311211681/f6828eee_9956838.png "12投递箱.png")
## 项目说明
项目参考 https://gitee.com/koengman/resume.git ，修改部分bug及解决兼容性问题后发布。 

感谢开源！
