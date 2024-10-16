---
sidebar_label: 1. Linux
---

# Linux

## 1 Linux的介绍
### 1.1 Linux是什么？
- 开源、免费的OS，注重安全性、稳定性、高并发处理能力，但没有优异的可视化界面
- 一般来说，windows用于个人PC机上，linux用于企业服务器上

### 1.2 Linux主要的发行版本
- 最早版本：**Linux的内核程序**，1991年开发、发行
- 在内核程序的基础之上推出的不同版本的Linux OS：Ubuntu（乌班图）、RedHat（红帽）、CentOS

---

## 2 Linux的安装
### 2.1 安装虚拟机VM
- 虚拟机：可以用软件模拟出一套具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统

### 2.2 安装CentOS
- linux的镜像，版本之一

---

## 3 Linux的目录结构
### 3.1 Linux目录结构概述
- 只有一个根目录/
- 层级式的目录结构
    ```mermaid
    graph TB
    / --> /root
    /root --> /root/Desktop
    /root --> /root/Maildir
    / --> /bin
    / --> /boot
    / --> /dev
    / --> /etc
    / --> /home
    / --> /var
    / --> /lib
    / --> /usr
    /usr --> /usr/bin
    /usr --> /usr/lib
    / --> /media
    / --> other[…]
    ```

### 3.2 Linux具体目录结构
1. `/usr/bin`：存放系统的可执行文件，使得其可在任何目录下执行
2. `/usr/local/bin`：存放本地用户的可执行文件，使得其可在任何目录下执行
3. `/etc`：存放配置文件
    1. `/etc/profile`：配置环境变量的文件
4. `/home`：用户的根目录，用于保存用户的私人数据，默认情况下该目录名与用户名一致
5. `/opt`：存放额外安装的软件

---

## 4 Linux的远程操作工具
1. Xshell：linux的终端模拟软件，可连接远程linux系统（在Xshell中创建会话）
    - 查看linux系统的ip地址：`ifconfig`
2. Xftp：文件传输软件，可连接远程linux系统（创建会话）

---

## 5 Linux系统管理
### 5.1 vi和vim的使用
两者都是linux中的文本编辑器，可用于创建、查看、编辑文本文件，但vim是vi的增强版本
- 模式：
    ```mermaid
    graph TB
    命令行 --#vim xxx--> norm[一般模式/正常模式]
    norm --i或a--> 编辑模式 --ESC--> norm
    norm --:或/--> 命令模式 --ESC--> norm
    ```
    1. 一般模式：可查看文件，但不能编辑文件
        - `vim filename.txt`：
            - 如果文件存在，则进入一般模式
            - 如果文件不存在，则创建文件并进入一般模式
    2. 编辑模式：可编辑文件，但无法保存编辑的内容
        - 一般模式下，按 `i` 键或 `a` 键进入编辑模式
            - `i` 键：光标停留在当前位置
            - `a` 键：光标停留在当前位置的下一个字符位置
        - 按 `Esc` 键，退出编辑模式回到一般模式
    3. 命令行模式：根据命令执行
        - 一般模式下，按 `shift` + `:` 进入命令行模式
        - 常用命令：
            1. `q!`：不保存文件并强制退出编辑器
            2. `wq`：保存文件并退出编辑器
            3. `q`：退出编辑器
- 快捷键：
    1. 复制当前行：【一般模式】`yy`，将光标所在行复制到剪切板；`p`，将剪切板中的内容粘贴到光标所在的下一行
    2. 往下复制5行：【一般模式】`5yy`，将光标所在行往下5行都复制到剪切板；`p`，将剪切板中的内容粘贴到光标所在的下一行
    3. 在文本文件中查找关键字：【命令行模式】`/关键字`，回车后文本中的关键字均会高亮；`n`，查找下一个关键字所在地
    4. 删除光标所在的当前行：【一般模式】`dd`
    5. 删除光标当前所在行往下5行：【一般模式】`5dd`
    6. 撤销上次编辑的内容：【一般模式】`u`
    7. 显示行号：【命令行模式】`set nu`，设置文件的行号；`set nonu`，取消显示文件的行号

### 5.2 用户管理
1. 用户简介：只有用户才能使用linux的系统资源；root为默认创建的系统管理员账号，拥有最高权限
2. 添加用户：`useradd [-d /dir] username`
    - 默认情况下，创建一个用户及在/home下创建一个同用户名相同的目录
    - 如果指定目录，则会按照指定的目录名来创建
    - 给用户设置密码：`passwd username`，需要输入具有一定复杂度的密码（不显示）
3. 删除用户：`userdel [-r] username`，如果加上 `-r` 则会一同删除用户的目录
4. 查询用户信息：`id username`
5. 切换用户：`su username`
    - 高 &rarr; 低：不需要密码验证
    - 低 &rarr; 高：需要密码验证

### 5.3 组管理
1. 组简介：组相当于角色的概念，可将具有共性的用户进行统一管理；每个用户至少属于一个组，也可属于多个组
2. 命令：
    ```bash showLineNumbers
    # 添加组
    groupadd group

    # 删除组
    groupdel group

    # 添加用户时指定组
    useradd [-g group] username

    # 将用户添加到组
    gpasswd -a username group

    # 将用户从组中移除
    gpasswd -d username group
    ```

### 5.4 系统操作
```bash showLineNumbers
# 立即关机
shutdown now
# 定时关机
shutdown -h xxx
# 立即重启
shutdown -r now

# 立即重启
reboot

# 同步数据库
sync
```

---

## 6 Linux实操指令
### 6.1 帮助指令
1. 用来查看linux系统手册上的帮助信息：`man 命令`
    - 信息分屏显示
    - 翻一行：`回车`
    - 翻一页：`空格`
    - 退出查看：`q`
2. 用来查看命名的内置帮助信息：`help 命令`

### 6.2 文件目录指令
```bash showLineNumbers
# 查看当前所在目录
pwd

# 查看指定目录下所有的子目录和文件列表（-l：以列表形式显示；-a：显示虚拟目录）
ls [option] [dir]

# 切换目录
cd dir

# 创建目录（-p：一次创建多级目录）
mkdir [option] dir

# 删除一个空目录
rmdir dir

# 创建一个或者多个空文件
touch file1[ file2 …]

# 复制文件或者目录（-r：递归）
cp [option] source dest

# 删除文件或者目录（-f：强制；-r：递归）
rm [option] file/dir

# 移动目录或者文件（两者均为文件时，只会重命名文件）
mv source dest

# 查看文件所有内容（-n：显示行号）
cat [option] file

# 分页查看文件内容
more file

# 分页查看文件内容
less file

# 查看文件的头n行
head [option] file

# 查看文件的后n行
tail [option] file

# 输出系统变量或者常量的值到命令行终端
echo $var

# 将命令结果输出到指定的文件中（目标文件不存在：新建；目标文件已存在：覆盖内容）
command > file

# 将命令结果追加输出到指定的文件中（目标文件不存在：新建；目标文件已存在：追加）
command >> file
```
- 切换目录：
    1. 绝对目录：以盘符开始的目录
        - `~`：当前用户的根目录
            - 超级管理员：`/root`
            - 普通用户：`/home/username`
    2. 相对目录：以目录名开始的目录
        - `..`：当前目录的上一级目录
        - `.`：当前目录
- 分页查看文件内容：一次性加载文件中的所有内容到内存，但分页显示
    - 按回车翻一行
    - 按空格翻一页

### 6.3 时间日期指令
```bash showLineNumbers
# 查看系统当前的完整的日期和时间
date
# 查看系统当前的年份
date +%Y
# 查看系统当前的月份
date +%m
# 查看系统当前的日期
date +%d
# 查看系统日期（按yyyy-MM-dd HH:mm:ss格式显示）
date '+%Y-%m-%d %H:%M:%S'
# 设置当前的系统时间
date -S 'yyyy-MM-dd HH:mm:ss'

# 查看当前月份的日历
cal
# 查看指定年份的日历
cal yyyy
```

### 6.4 搜索查找指令
1. 普通搜索：`find [range] [standard] keyword`
    - `-name`：默认按名称搜索（文件或者目录所在的路径也在搜索范围之内）
    - `-size`：按文件大小搜索
    - `-user`：按文件的所有者搜索
2. 在整棵目录树中搜索文件或者目录（根据名称搜索）：`locate keyword`
    - `updatedb`：更新数据库
3. 搜索过滤命令（即在前一个搜索命令的结果中按名称进一步过滤）：`搜索/查看命令 |grep [option] condition`

### 6.5 压缩和解压缩指令
1. 压缩/解压单个文件：
    ```bash showLineNumbers
    # 压缩单个文件，生成一个.gz的压缩包，并会把原来的文件删除
    gzip file
    # 解压.gz压缩包，并把原来的.gz压缩包删除
    gunzip package.gz
    ```
2. 压缩（打包）/解压多个文件和目录：
    ```bash showLineNumbers
    # 将文件列表或目录列表压缩到压缩包中
    zip package.zip file/dir_list
    # 将指定的.zip压缩包解压到当前目录/指定目录
    unzip package.zip[ -d dir]
    ```
3. 压缩（打包）/解压多个文件和目录：
    ```bash showLineNumbers
    # 打包或者压缩
    tar -zcvf xxx.tar.gz -C file/dir_list
    # 解压
    tar -zxvf xxx.tar.gz -C file/dir_list
    ```

### 6.6 组管理指令
1. linux系统的用户分类：文件或目录通过组来控制用户的访问权限
    1. 所有者：默认情况下，文件或者目录的所有者都是创建者，可以修改
    2. 同组用户：和文件或者目录属于同一个组的用户
    3. 其它组用户：既不是文件或者目录的所有者，也不是同组用户
2. 命令：
    ```bash showLineNumbers
    # 查看文件的所有者和所在的组
    ls -l

    # 修改文件或者目录的所有者
    chown new_owner:new_group file/dir

    # 修改文件或者目录的所在组
    chgrp new_group file/dir
    ```

### 6.7 权限管理指令
1. 文件或者目录的三种权限：
    1. 读Read：可以读取、查看文件的内容
    2. 写Write：可以修改文件的内容
    3. 执行Execute：若该文件是可执行文件（.sh），则可直接运行
2. 文件或者目录的权限控制：使用r、w、x来表示读、写、执行的权限
    1. 所有者权限
    2. 同组用户权限
    3. 其它组用户权限
3. 查看文件或者目录的权限：`ls -aul`
4. 修改文件或者目录的权限：`chmod command`
    1. 字母的形式：如`chmod g-w,o+w t5.txt`
        - r、w、x：读、写、执行的权限
        - u、g、o、a：给所有者、同组用户、其它组用户、所有用户修改权限
        - +、-、=：给指定的用户增加、减少、设置对应的权限
    2. 数字的形式：如`chmod 753 t5.txt`
        - r、w、x：4、2、1
        - 每一个文件或者目录都有三部分权限，每一部分权限都可以用一组数据之和来表示，三部分权限就是一组三个数据序列

---

## 7 网络配置
1. 查看和配置网络
2. 配置Linux网络：`vi /etc/sysconfig/network-scripts/ifcfg-ens33`
    ```properties showLineNumbers
    # 获取ip的方式
    BOOTPROTO="static"
    ONBOOT="yes"

    # 设置静态ip地址（从虚拟网络编辑器设置的范围中选取一个）
    IPADDR=192.168.11.128
    # 设置网关（在虚拟网络编辑器NAT中查看）
    GATEWAY=192.168.11.2
    # 设置DNS（同网关一致）
    DNS=192.168.11.2
    ```

---

## 8 进程管理
1. 进程介绍
    1. 线程：一个程序的线路
    2. 进程：一个程序的执行，一个进程占用一个端口
2. 查看系统运行的进程：
    ```bash showLineNumbers
    # 只显示应用进程
    ps
    # 显示所有进程
    ps -e
    # 以全格式的形式显示所有进程
    ps -ef
    # 根据关键字查找进程信息
    ps -ef | grep keyword
    ```
3. 终止进程：`kill id PID`
4. 服务管理
    1. 服务介绍：服务是支持Linux运行的一些必要程序，本质上也是进程，叫守护进程
    2. 操作服务：`systemctl [start|stop|restart|reload|status|enable] serve`

---

## 9 Linux软件包管理
### 9.1 RPM包的管理
1. 简介：一种Linux的软件包的打包和安装工具，它操作的软件包都是.rpm结尾
2. 命令：
    ```bash showLineNumbers
    # 查看当前系统中已经安装的rpm软件包
    rpm -qa | grep keyword

    # 卸载rpm软件包
    rpm -e keyword

    # 安装rpm包
    rpm -ivh xxx.rpm
    ```

### 9.2 YUM包的管理
1. 简介：一种基于RPM的软件包管理工具，它能够从指定服务器上自动下载RPM包并且自动安装，可以自动处理软件包之间的依赖关系
2. 命令：
    ```bash showLineNumbers
    # 查看当前系统中已经安装的rpm软件包
    yum list installed | grep keyword

    # 卸载rpm软件包
    yum remove xxx.xxx

    # 安装rpm包
    yum install keyword
    ```

---

## 10 搭建JAVA EE开发环境（略）