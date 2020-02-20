SET NAMES UTF8;
DROP DATABASE IF EXISTS lecake;
CREATE DATABASE lecake CHARSET=UTF8;
USE lecake;
CREATE TABLE lecake_user(
    uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(16) NOT NULL UNIQUE
);
INSERT INTO lecake_user VALUES(1,'root','mima111111','15108442300');
INSERT INTO lecake_user VALUES(2,'pdd','mima222222','15208442300');
INSERT INTO lecake_user VALUES(3,'zzc','mima333333','15308442300');
INSERT INTO lecake_user VALUES(4,'aaa','mima444444','15408442300');

CREATE TABLE lecake_details(
    did INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pic VARCHAR(128),
    lgpic VARCHAR(128),
    title VARCHAR(128),
    dname VARCHAR(128),
    detail VARCHAR(128),
    price INT
);
INSERT INTO lecake_details VALUES(1,'image/list_1.jpg','image/list_1_lg.jpg','','雪域牛乳芝士','经典之作 热销多年',218);
INSERT INTO lecake_details VALUES(null,'image/list_2.jpg','image/list_2_lg.jpg','','不染','轻盈饼皮夹裹细腻奶油 层次丰富',198);
INSERT INTO lecake_details VALUES(null,'image/list_3.jpg','image/list_3_lg.jpg','aha会员专享 限时立减40元','闲蛋黄','热度持续飙升 人气咸蛋黄蛋糕',258);
INSERT INTO lecake_details VALUES(null,'image/list_4.jpg','image/list_4_lg.jpg','aha会员专享 限时立减40元','壁咚！阿华田','浓郁麦芽可可 绵软与甜脆的碰撞',258);
INSERT INTO lecake_details VALUES(null,'image/list_5.png','image/list_5_lg.jpg','','巧克力松露','巧克力爱好者的福音',218);
INSERT INTO lecake_details VALUES(null,'image/list_6.jpg','image/list_6_lg.jpg','+58元升级','海盐乳酪芝士','芝士控绕不开的难忘滋味',198);
INSERT INTO lecake_details VALUES(null,'image/list_7.jpg','image/list_7_lg.jpg','','那年夏天','清新抹茶 融入层层细腻奶油',198);
INSERT INTO lecake_details VALUES(null,'image/list_8.jpg','image/list_8_lg.jpg','限时立减118元','草莓千层','时令草莓层层细腻甜到心里',336);
INSERT INTO lecake_details VALUES(null,'image/list_9.jpg','image/list_9_lg.jpg','','玫瑰雪域芝士','懂得营造浪漫氛围的蛋糕',218);
INSERT INTO lecake_details VALUES(null,'image/list_10.jpg','image/list_10_lg.jpg','','提拉米苏·写意','80%的雪域老友也爱这一款',218);
INSERT INTO lecake_details VALUES(null,'image/list_11.jpg','image/list_11_lg.jpg','','茶草京都','抹茶控京都寻味 草色茶香自悠然',298);
INSERT INTO lecake_details VALUES(null,'image/list_12.jpg','image/list_12_lg.jpg','aha会员专享 限时立减40元','草莓雪域芝士','时令草莓邂逅浓浓芝士',218);
INSERT INTO lecake_details VALUES(null,'image/list_1.jpg','image/list_1_lg.jpg','','雪域牛乳芝士','经典之作 热销多年',218);
INSERT INTO lecake_details VALUES(null,'image/list_2.jpg','image/list_2_lg.jpg','','不染','轻盈饼皮夹裹细腻奶油 层次丰富',198);
INSERT INTO lecake_details VALUES(null,'image/list_3.jpg','image/list_3_lg.jpg','aha会员专享 限时立减40元','闲蛋黄','热度持续飙升 人气咸蛋黄蛋糕',258);
INSERT INTO lecake_details VALUES(null,'image/list_4.jpg','image/list_4_lg.jpg','aha会员专享 限时立减40元','壁咚！阿华田','浓郁麦芽可可 绵软与甜脆的碰撞',258);
INSERT INTO lecake_details VALUES(null,'image/list_5.png','image/list_5_lg.jpg','','巧克力松露','巧克力爱好者的福音',218);
INSERT INTO lecake_details VALUES(null,'image/list_6.jpg','image/list_6_lg.jpg','+58元升级','海盐乳酪芝士','芝士控绕不开的难忘滋味',198);
INSERT INTO lecake_details VALUES(null,'image/list_7.jpg','image/list_7_lg.jpg','','那年夏天','清新抹茶 融入层层细腻奶油',198);
INSERT INTO lecake_details VALUES(null,'image/list_8.jpg','image/list_8_lg.jpg','限时立减118元','草莓千层','时令草莓层层细腻甜到心里',336);
INSERT INTO lecake_details VALUES(null,'image/list_9.jpg','image/list_9_lg.jpg','','玫瑰雪域芝士','懂得营造浪漫氛围的蛋糕',218);
INSERT INTO lecake_details VALUES(null,'image/list_10.jpg','image/list_10_lg.jpg','','提拉米苏·写意','80%的雪域老友也爱这一款',218);
INSERT INTO lecake_details VALUES(null,'image/list_11.jpg','image/list_11_lg.jpg','','茶草京都','抹茶控京都寻味 草色茶香自悠然',298);
INSERT INTO lecake_details VALUES(null,'image/list_12.jpg','image/list_12_lg.jpg','aha会员专享 限时立减40元','草莓雪域芝士','时令草莓邂逅浓浓芝士',218);
INSERT INTO lecake_details VALUES(null,'image/list_1.jpg','image/list_1_lg.jpg','','雪域牛乳芝士','经典之作 热销多年',218);
INSERT INTO lecake_details VALUES(null,'image/list_2.jpg','image/list_2_lg.jpg','','不染','轻盈饼皮夹裹细腻奶油 层次丰富',198);
INSERT INTO lecake_details VALUES(null,'image/list_3.jpg','image/list_3_lg.jpg','aha会员专享 限时立减40元','闲蛋黄','热度持续飙升 人气咸蛋黄蛋糕',258);
INSERT INTO lecake_details VALUES(null,'image/list_4.jpg','image/list_4_lg.jpg','aha会员专享 限时立减40元','壁咚！阿华田','浓郁麦芽可可 绵软与甜脆的碰撞',258);
INSERT INTO lecake_details VALUES(null,'image/list_5.png','image/list_5_lg.jpg','','巧克力松露','巧克力爱好者的福音',218);
INSERT INTO lecake_details VALUES(null,'image/list_6.jpg','image/list_6_lg.jpg','+58元升级','海盐乳酪芝士','芝士控绕不开的难忘滋味',198);
INSERT INTO lecake_details VALUES(null,'image/list_7.jpg','image/list_7_lg.jpg','','那年夏天','清新抹茶 融入层层细腻奶油',198);
INSERT INTO lecake_details VALUES(null,'image/list_8.jpg','image/list_8_lg.jpg','限时立减118元','草莓千层','时令草莓层层细腻甜到心里',336);
INSERT INTO lecake_details VALUES(null,'image/list_9.jpg','image/list_9_lg.jpg','','玫瑰雪域芝士','懂得营造浪漫氛围的蛋糕',218);
INSERT INTO lecake_details VALUES(null,'image/list_10.jpg','image/list_10_lg.jpg','','提拉米苏·写意','80%的雪域老友也爱这一款',218);
INSERT INTO lecake_details VALUES(null,'image/list_11.jpg','image/list_11_lg.jpg','','茶草京都','抹茶控京都寻味 草色茶香自悠然',298);
INSERT INTO lecake_details VALUES(null,'image/list_12.jpg','image/list_12_lg.jpg','aha会员专享 限时立减40元','草莓雪域芝士','时令草莓邂逅浓浓芝士',218);

CREATE TABLE lecake_shopping(
    pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pic VARCHAR(128),
    dname VARCHAR(128),
    price INT,
    sum INT,
    num INT
);
INSERT INTO lecake_shopping VALUES(1,'image/list_1.jpg','雪域牛乳芝士',218,218,1);

