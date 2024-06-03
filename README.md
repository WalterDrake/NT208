# **WEB HỌC TẬP TRỰC TUYẾN DÀNH CHO SINH VIÊN UIT - UITeCo**

UITeCo là một trang web học tập trực tuyến dành cho sinh viên và giảng viên UIT.

## **Mô tả**

-UITeCo là một trang web học tập trực tuyến dành riêng cho sinh viên và giảng UIT với các khóa học, tài liệu, video bài giảng được các thầy cô, sinh viên của trường chia sẻ lên hoàn toàn miễn phí. UITeCo lấy ý tưởng từ UIT courses và Microsoft Teams, giúp sinh viên có thể vào học các môn học cảu các khoa khsc nhau và vừa có thể tạo phòng học, nhóm học với nhau như trên Teams. Điểm đặc biệt của UITeCo là trang web chia sẻ tài liệu của tất cả các môn học của từng khoa từ môn cơ sở ngành đến các môn chuyên ngành (tài liệu này sẽ do giảng viên môn học chia sẻ lên nên sẽ đảm bảo về chất lượng và nguồn gốc) nhằm phụ vụ mong muốn học hỏi thêm kiến thức của sinh viên. Trang web tích hợp các chức năng cơ bản, cần thiết của UIT Courses và Microsoft Teams như: tạo phòng học, tạo group học, đăng tải hình ảnh, xem video bài học, nhắn tin,...
-Đối với giảng viên: Website có các chức năng giúp giảng viên có thể đăng tải video, giao bài tập, deadline, chấm điểm sinh viên, tạo lớp học, tạo phòng học trực tuyến, quản lý sinh viên giống như UIT courses.

## **PHẦN 1: CÁC CHỨC NĂNG (Mô tải sơ lược)**
 (Mô tả chi tiết ở phần 2)

**Chức năng 1: Đăng nhập/ Đăng xuất**
- Phân luồng người dùng: Admin, Teacher, Student
- Cho phép đăng kí tài khoản admin
- Cho phép Admin tạo tài khoản cho Teacher và Student
- Ghi nhớ tài khoản 

**Chức năng 2: Trang chủ**
- Đề xuất danh sách các khóa học, nhóm học 
- Hiển thị danh sách thành viên đang hoạt động
- Hiển thị lịch 

**Chức năng 3: Khóa học**
- Tạo khóa học 
- Cho phép học sinh tham gia khóa học
- Cho phép Admin, giáo viên thêm/ xóa sinh viên vào khóa học 
- Cho phép giáo viên đăng tải **Video, Bài tập, Thông báo**
- Cho phép Admin xóa khóa học 
- Cho phép học sinh comment ở từng video bài giảng 
- Admin có thể xóa comment trên bài giảng 
- Lấy thông tin khóa học, lấy danh sách học sinh khóa học, lấy danh sách khóa học của học sinh và giáo viên 
- Cho phép giáo viên chấm điểm khóa học từng học sinh 
- Lấy danh sách khóa học học sinh đã hoàn thành 
- Cho phép học sinh xem điểm khóa học
- Cho phép người tạo khóa học cập nhật thông tin khóa học 

**Chức năng 4: Học nhóm**
- Tạo nhóm
- Xóa nhóm
- Cho phép cập nhật thông tin nhóm
- Lấy danh sách tất cả nhóm học 
- Cho phép học sinh tahm gia nhóm học, rời nhóm học 
- Cho phép các thành viên trong nhóm chat với nhau

**Chức năng 5: Học tập**
- Cho phép Admin và giáo viên đăng video bài giảng theo các môn 
- Cho phép tất cả học sinh xem video bài giảng ở tất cả các môn 

**Chức năng 6: Diễn đàn**
- Đăng tải trạng thái, trao đổi học tập 
- Cho phép Admin xóa bài đăng 
- Cho phép comment trên các bài đăng 

**Chức năng 7: To do list**
- Cho phép học sinh tạo bảng học tập 
- Cho phép tạo các column và card
- Cho phép di chuyển giữa các column và card 
- Cho phép xóa column và card 

**Chức năng 8: Thống kê**
- Cho phép thống kê số lượng sinh viên, giáo viên, số lượng khóa học
- Cho phép quản lý danh sách các sinh viên (thêm, xóa sinh viên)
- Cho phép quản lý danh sách các giáo viên (thêm, xóa giáo viên)
- Cho phép xem danh sách các nhóm học 
- Cho phép xem danh sách các khóa học 

**Chức năng 9: Thông báo**
- **Thông báo bài tập:** Khi giáo viên đăng bài tập thì chỉ những học sinh có trong khóa học mới nhận được thông báo 
- **Thông báo diễn đàn:** Khi Admin đăng bài thì tất cả học sinh đều nhìn thấy thông báo 

**Chức năng 10: Tìm kiếm**
- Cho phép tìm kiếm khóa học, đưa ra đề xuất khóa học tồn tại

**Chức năng 11: Profile**
- Cho phép update thông tin người dùng 

## **PHẦN 2: GIAO DIỆN VÀ CÁC CHỨC NĂNG CHÍNH (Mô tả chi tiết)**

### Chức năng 1: Đăng nhập/ Đăng xuất
**Đăng nhập**
![Dang nhap](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/5ab58edc-a38d-4790-b299-aa196493539a)

- **Mô tả:** Dành riêng cho uit nên sẽ cố định định dạng email đk tài khoản (.uit.edu.vn). 
- **Chức năng:**
   + Đăng nhập	
   + Ghi nhớ phiên hoạt động	
  + Phân quyền
### Chức năng 2. Trang chủ
![trang chu](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/5ae81114-610a-42c8-b6c7-91ed21b7b478)

![Trang chu](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/fde2e32e-2bb2-45d1-86f6-6dc5ef054aa7)

- **Mô tả:** 
  Bao gồm các module chính:
  - Trang chủ
  - Khóa học
  - Học tập
  - Học nhóm
  - Diễn đàn
  - To do list
  - Tìm kiếm
  - Thông báo
  - Tài khoản
  - Các mục đề xuất
  - Lịch
  - Thành viên đang hoạt động
  - Cài đặt (Admin)

### Chức năng 3. Khóa học

![Khóa học](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/f2de6985-4c31-4ea0-8a66-25082b3ff222)


- **Mô tả:**

  -Gồm các khóa học do Admin tạo (có thể là các khóa training của các khoa hoặc trường tổ chức)

  -Admin có quyền thêm giáo viên và sinh viên vào khóa học 

  -Giáo viên có quyền chấm điểm sinh viên, khi sinh viên được chấm điểm thì sẽ được xác nhận là hoàn thành khóa học.


- **Chức năng:**
**Tạo khóa học**

**Cho phép Admin, giáo viên thêm/ xóa sinh viên vào khóa học**

**Cho phép giáo viên đăng tải Video, Bài tập, Thông báo**

**Cho phép học sinh xem điểm khóa học**

**Cho phép Admin xóa khóa học:** Thực hiện xóa có nhiều ràng buộc thế nên việc xóa 1 khóa học ảnh hưởng đến các collection liên quan như sinh viên, giáo viên, Item, Video, Post,…

**Cho phép học sinh comment ở từng video bài giảng:** Xây dựng hệ thống như một đoạn chat mini trong hệ thống comment của từng Video bài giảng của giáo viên để học sinh có thể trao đổi trực tiếp vơi bài học.

**Admin có thể xóa comment trên bài giảng:** Việc thực hiện lưu trữ các đoạn comment hoặc tin nhắn làm lưu lượng dữ liệu database khá lớn nên việc xóa sẽ cũng có nhiều ràng buộc đi kèm.

**Lấy thông tin khóa học, lấy danh sách học sinh khóa học, lấy danh sách khóa học của học sinh và giáo viên (phân quyền):**
Thực hiện phân quyền một cách chi tiết ứng với mỗi role thì chỉ thực hiện đúng và chỉ được xem những trường dữ liệu thuộc về mình, ở đây chúng em xây dựng admin có thể xem toàn bộ danh sách khóa học, giáo viên chỉ có thể xem được những khóa học mình đứng lớp và học sinh chỉ xem được danh sách khóa học mình tham gia.

**Cho phép giáo viên chấm điểm khóa học từng học sinh:** Giáo viên có quyền chấm điểm học sinh của mình sau khi hoàn thành môn học và những học sinh đã được chấm điểm thì khóa học sẽ chuyển về đúng nơi **HOÀN THÀNH** để phân biệt giữa khóa học **ĐANG HỌC** và **HOÀN THÀNH**.

**Lấy danh sách khóa học học sinh đã hoàn thành:**
Sau khi được giáo viên chấm để thì khóa học sẽ tự động cài cờ **HOÀN THÀNH** và giúp sinh viên hiển thị khóa học đó bên ô **HOÀN THÀNH**.

**Tạo một sự kiện THÔNG BÁO khi giáo viên thực hiện đăng bài tập:** Ứng với mỗi Khóa học khi giáo viên đăng bài tập chỉ những học sinh trong nhóm đó nhận được thông báo có bài tập được đăng tải.


### Chức năng 4. Học tập

![Học tập](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/8ce9a545-b6b8-468b-ae79-e67c30fb1b60)

- **Mô tả:**
  Bao gồm các môn học đại cương, các môn cơ sở ngành và chuyên ngành của từng khoa.

- **Chức năng:**
  - Cho phép tất cả học sinh xem video bài giảng ở tất cả các môn giáo viên có thể đăng tải các bài giảng một cách cố định lên đây chỉ để cho học sinh xem và không có nhiều tương tác ở đây.


### Chức năng 5. Học nhóm
![Học nhóm](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/8d030e73-384b-4018-9abb-4781b666b739)


- **Mô tả:**
  Bao gồm các lớp học do giảng viên bộ môn tạo vào các group học tập cá nhân, có thể tạo các cuộc họp trực tuyến để trò chuyện, học tập giống như Microsoft Teams.

- **Chức năng:**

**Tạo nhóm**

**Lấy danh sách tất cả nhóm học**

 **Xóa nhóm:**
Việc xóa nhóm ảnh hưởng rất nhiều đến các thông tin lưu trữ trong khóa học như là lưu lượng tin nhắn lưu trữ xuống Database và các sinh viên có mặt trong nhóm học đó.

 **Cho phép học sinh tham gia nhóm học, rời nhóm học:** Sinh viên được tham gia khóa học và rời khóa học cũng ảnh hưởng nhiều đến các ràng buộc đi kèm.

 **Cho phép các thành viên trong nhóm chat với nhau (realtime):** Thực hiện chức năng chat realtime cho các thành viên trong nhóm học, và lưu trữ tin nhắn trong đoạn chat, mỗi nhóm sẽ có đoạn tin nhắn hội thoại khác nhau. Admin sẽ có quyền kick thành viên trong nhóm chat

![Chat](https://github.com/manhhunghoo/NT208/assets/87658807/2b831c71-f360-466d-bd08-76fe6e5dac5b)

###  Chức năng 6. Diễn đàn
![Diễn đàn](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/7aa38982-84bd-4a1b-8975-e03d7aa20de3)

- **Mô tả:**
Nơi trao đổi bài tập, tạo các bài đăng tương tác của các sinh viên.

- **Chức năng:**

**Đăng tải trạng thái, trao đổi học tập (realtime):** Cho phép tất cả các vai trò trong chương trình có thể thực hiện đăng tải bài đăng.

**Cho phép Admin xóa bài đăng:** Chỉ có phép Admin xóa các bài đăng.

**Tạo sự kiện thông báo đến tất cả các đối tượng khi có một người thực hiện đăng tải một bài thông báo:** Khi bất kỳ role nào thực hiện đăng tải một trạng thái thì thông báo sẽ tác động đến tất cả các người dùng trong chương trình.

**Cho phép comment trên các bài đăng ( Chưa thực hiện để ở phần phát triển tương lai):** Chức năng này tương tự với phần comment trong các video bài giảng, chúng em dự định sẽ phát triển thêm phần này ở các bài đăng để có thể trao đổi giữa bài đăng và mọi người.


### Chức năng 7. Todolist 
![image](https://github.com/manhhunghoo/DoAnWeb/assets/87658807/0c84143e-60e8-4fc6-848d-a2c250f1ae4d)

- **Mô tả:**
**Cho phép học sinh tạo bảng học tập:** Mỗi học sinh sẽ tạo cho mình một hệ thống todoList để hệ thống các công việc của bản thân và ứng với mỗi học sinh chỉ tạo ra 1 bảng todoList và được lưu trữ riêng dưới database.

**Cho phép tạo các column và card:** tạo thông tin các column và card để ghi lại thông tin

**Cho phép di chuyển giữa các column và card:** Việc thay đổi giữa các cột đòi hỏi các id của column và card có nhiều thay đổi sau mỗi lần di chuyển và chúng em đã xử lý được vấn đề này.

**Cho phép xóa column và card:** việc xóa danh sách các column và card đòi hỏi có nhiều ràng buộc với nhau.


### Chức năng 8: Thống kê

![Thống kê](https://github.com/WalterDrake/NT208/assets/87658807/31600c7b-a43b-4a9a-a02f-cdbc7257e118)

- **Mô tả:**
**Cho phép thống kê số lượng sinh viên, giáo viên, số lượng khóa học:** Thực hiện thống kê danh sách, số lượng sinh viên giáo viên khóa học để admin có thể theo dõi.

**Cho phép quản lý danh sách các sinh viên (thêm, xóa sinh viên):** Chỉ admin có quyền cấp một tài khoản cho sinh viên và giáo viên.

**Cho phép quản lý danh sách các giáo viên (thêm, xóa giáo viên):** Cho phép thống kế giáo viên và các lớp học giáo viên quản lý, quản lý sinh viên và các lớp học sinh tham gia,…

**Cho phép xem danh sách các nhóm học:** Hệ thống các nhóm học đã được tạo ra.

**Cho phép xem danh sách các khóa học : Hệ thống các khóa học đã được tạo ra.**



### Chức năng 9: Thông báo

![Thông báo](https://github.com/WalterDrake/NT208/assets/87658807/e8963421-2aef-4fa2-9108-581d5e4db69a)

- **Mô tả:**

  **Thông báo bài tập:** Khi giáo viên đăng bài tập thì chỉ những học sinh có trong khóa học mới nhận được thông báo 

  **Thông báo diễn đàn:** Khi Admin đăng bài thì tất cả học sinh đều nhìn thấy thông báo 

### Chức năng 10: Tìm kiếm
![Tìm kiếm](https://github.com/WalterDrake/NT208/assets/87658807/ae1d0531-8323-427e-bdbd-6afada87a27d)
- **Mô tả:**
  - Cho phép tìm kiếm khóa học, đưa ra đề xuất khóa học tồn tại. Thực hiện livesearch để tìm kiếm danh sách khóa học dựa trên các gợi ý đi kèm.

### Chức năng 11: Profile
![Profile](https://github.com/WalterDrake/NT208/assets/87658807/20d46399-8c20-4098-88e0-4468e9663914)
- **Mô tả:**
  - Cho phép update thông tin người dùng 


## **PHẦN 3: SƠ ĐỒ DATABASE, CÁC BẢNG TRONG MONGODB**

**1. AdminModel**

![AdminModel](https://github.com/WalterDrake/NT208/assets/87658807/be78e9b4-2faf-4a63-aadd-43c028560e86)


**2. BaitapModel**

![BaitapModel](https://github.com/WalterDrake/NT208/assets/87658807/a24a1097-870c-444d-aa7e-8a61e80b7e8e)


**3. BoardModel**

![BoardModel](https://github.com/WalterDrake/NT208/assets/87658807/7345a49e-1f55-4eb7-9e94-a038dcf4c058)


**4. CardModel**

![CardModel](https://github.com/WalterDrake/NT208/assets/87658807/e49066df-4a20-4e4f-8fcf-97bdf583f6de)


**5. ChatrealtimeModel**

![ChatrealtimeModel](https://github.com/WalterDrake/NT208/assets/87658807/9ff0f967-4b3b-41ec-b267-092b5f671c01)


**6. ColumnModel**

![ColumnModel](https://github.com/WalterDrake/NT208/assets/87658807/90c5cd53-aef1-4a5d-8c5c-a698fec565be)


**7. CommentModel**

![CommentModel](https://github.com/WalterDrake/NT208/assets/87658807/5252d8e3-c930-42cc-a0b0-665746e2a988)


**8. CommentBoxModel**

![CommentBoxModel](https://github.com/WalterDrake/NT208/assets/87658807/9a3a484b-56ae-4ace-a70d-5c6036707dc8)


**9. ComplainModel**

![ComplainModel](https://github.com/WalterDrake/NT208/assets/87658807/f9a2eeda-61f8-4b20-9ed3-7256d1c1332e)


**10. CoursesModel**

![CoursesModel](https://github.com/WalterDrake/NT208/assets/87658807/e9e59dc1-4e90-470e-a568-9740273e1c64)


**11. EventModel**

![EventModel](https://github.com/WalterDrake/NT208/assets/87658807/2006333a-0c27-469f-93b7-b5e4219c96f5)


**12. GroupModel**

![GroupModel](https://github.com/WalterDrake/NT208/assets/87658807/ded1f960-5eb3-411d-9161-8e8c3b567e0a)


**13. ItemModel**

![ItemModel](https://github.com/WalterDrake/NT208/assets/87658807/2681a492-3f83-48c4-8c8f-d2204c0f87ca)


**14. MessageModel**

![image](https://github.com/manhhunghoo/NT208/assets/87658807/af20ba5e-d463-4323-89dc-654ee8ed927b)



**15. NotificationModel**

![NotificationModel](https://github.com/WalterDrake/NT208/assets/87658807/ed0e7862-57a0-4019-8797-f3e3f4012d0c)


**16. PostModel**

Post diễn đàn

![PostForum](https://github.com/WalterDrake/NT208/assets/87658807/294e914d-3c09-4a29-83eb-41f7344a3434)

Post khóa học

![PostCourses](https://github.com/WalterDrake/NT208/assets/87658807/f0d4417f-d485-44c3-ac50-7ee60365b30c)


**17. StudiesModel**

![StudyModel](https://github.com/WalterDrake/NT208/assets/87658807/0d89c91b-dfb9-47c5-8aaa-4e63226e4ab2)


**18. TeacherModel**

![TeacherModel](https://github.com/WalterDrake/NT208/assets/87658807/8211e52f-fe2e-4a9c-bd2d-11f0f99c6b6f)


**19. TeamBoxModel**

![TeamBox](https://github.com/WalterDrake/NT208/assets/87658807/cc36fdc3-762a-4440-bb12-0103c9d54d27)


**20. TodolistModel**

![Todolist](https://github.com/WalterDrake/NT208/assets/87658807/ab21b2e5-c263-4bfb-a177-dc16c9a9477e)


**21. UsersModel**

![User](https://github.com/WalterDrake/NT208/assets/87658807/abf2b909-0cd6-4ff7-91cb-4d777c4d0f4f)


**22. VideoModel**

![VideoModel](https://github.com/WalterDrake/NT208/assets/87658807/53b66f0b-7606-45b5-ae05-d30a90f87704)


## **PHẦN 4: CÁC API TRONG POSTMAN**
[Postman](https://lunar-meteor-546064.postman.co/workspace/My-Workspace~4273396b-c868-4d1c-8899-4d2557c20925/collection/34142186-f8552a91-1987-47c7-af18-b72d485e2185?action=share&creator=34142186)


## Tham khảo sơ đồ chức năng của web ở link dưới
[Sơ đồ chức năng](https://drive.google.com/file/d/154R6ONFJVh0bGFez0gV-TwrMxyg9wFdx/view)
[Sơ đồ các bảng trong DB](https://app.diagrams.net/#G1wn_qjR4yDZ7StfXItSkd-eadcSycjVrz#%7B"pageId"%3A"R2lEEEUBdFMjLlhIrx00"%7D)


## Elearning project 

The tech stack used in this project is MongoDB , Express , Reactjs and Nodejs


## First time

B1:  Tải thư viện cần thiết cho frontend
```
cd frontend 
npm i
```
B2 Tải thư viện cần thiết cho backend
```
cd backend
npm i
```

## Run project
B1: Chạy frontend
```
cd fronend
npm run dev
```

B2: Chạy backend
```
cd backend
npm run dev
```
## DANH SÁCH THÀNH VIÊN NHÓM 9

Hồ Đăng Mạnh Hưng–22520502

Lê Thị Thùy Trang–22521511

Nguyễn Việt Thắng–22521339

Nguyễn Phan Quốc Đạt–22520218

![Nhom9](https://github.com/manhhunghoo/NT208/assets/87658807/f518438e-2884-4a72-a5de-c0b48a2dbe30)


## Link web deploy
[Linkweb](https://uitwebelearning.vercel.app)

## Tiêu chí cộng điểm 
**Google page speed và SEO Score**
![image](https://github.com/manhhunghoo/NT208/assets/87658807/7df0d97b-e2bc-4443-8863-62aab8ce47ec)

