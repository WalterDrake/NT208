# WEB HỌC TẬP TRỰC TUYẾN DÀNH CHO SINH VIÊN UIT - UITeCo

UITeCo là một trang web học tập trực tuyến dành cho sinh viên và giảng viên UIT.

## Mô tả

-UITeCo là một trang web học tập trực tuyến dành riêng cho sinh viên và giảng UIT với các khóa học, tài liệu, video bài giảng được các thầy cô, sinh viên của trường chia sẻ lên hoàn toàn miễn phí. UITeCo lầ sự kết hợp giữa UIT courses và Microsoft Teams, giúp sinh viên có thể vào học các môn học và vừa có thể tạo phòng học, nhóm học với nhau như trên Teams. Điểm đặc biệt của UITeCo là trang web chia sẻ tài liệu của tất cả các môn học của từng khoa từ môn cơ sở ngành đến các môn chuyên ngành (tài liệu này sẽ do giảng viên môn học chia sẻ lên nên sẽ đảm bảo về chất lượng và nguồn gốc) nhằm phụ vụ mong muốn học hỏi thêm kiến thức của sinh viên. Trang web tích hợp các chức năng cơ bản, cần thiết của UIT Courses và Microsoft Teams như: tạo phòng học, tạo group học, đăng tải hình ảnh, chia sẻ tài liệu, xem video bài học, nhắn tin,...
-Đối với giảng viên: Website có các chức năng giúp giảng viên có thể đăng tải video, tài liệu học tập, giao bài tập và deadline, tạo lớp học, tạo phòng học trực tuyến, quản lý sinh viên giống như UIT courses.

## PHẦN 1: CÁC CHỨC NĂNG (Mô tải sơ lược)
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

## PHẦN 2: GIAO DIỆN VÀ CÁC CHỨC NĂNG CHÍNH (Mô tả chi tiết)

### Chức năng 1: Đăng nhập/ Đăng xuất
**Đăng nhập**
![Login](https://github.com/WalterDrake/NT208/assets/87658807/8b1e0a51-82bf-47a3-8733-5f875a8fa19f)

- **Mô tả:** Dành riêng cho uit nên sẽ cố định định dạng email đk tài khoản (.uit.edu.vn). Ở phần đăng ký sẽ có mục chọn thân phận (Giảng viên/ Sinh viên), ở mỗi thân phận sẽ có một vài chức năng khác nhau.
- **Chức năng:**
   + Tạo tài khoản
   + Đăng nhập	
   + Reset mật khẩu	
   + Ghi nhớ đăng nhập	
   + Ghi nhớ phiên hoạt động	

### 2. Trang chủ
![Trang chủ](https://github.com/WalterDrake/NT208/assets/87658807/6fb46b24-a585-4ee5-bd7e-3fa376409e05)

- **Mô tả:** 
  Bao gồm các module chính:
  - Trang chủ
  - Khóa học
  - Học tập
  - Học nhóm
  - Diễn đàn
  - Tìm kiếm
  - Tin nhắn
  - Thông báo
  - Tài khoản
  - Lịch
  - Đang hoạt động
  - Sự kiện
  - Hỗ trợ

### 3. Khóa học

![Khóa học](https://github.com/WalterDrake/NT208/assets/87658807/7ef01741-1014-4c5c-9bb1-167b5521737d)

- **Mô tả:**
  Khóa học, khóa training do trường và các khoa tổ chức, thông tin các khóa học sắp tới.


- **Chức năng:**
  - *Sinh viên:* Xem, tải tài liệu từ các khóa học hiện có, xem tiếp tục các khóa học đang học dở.
  - *Giảng viên:* Đăng các khóa traing, tài liệu, video bài giảng.

### 4. Học tập

![Học tập](https://github.com/WalterDrake/NT208/assets/87658807/ce7d4488-3edd-4440-961b-3523abc01236)

- **Mô tả:**
  Bao gồm các môn học đại cương, các môn cơ sở ngành và chuyên ngành của từng khoa.

- **Chức năng:**
  - *Sinh viên:* Xem video, tải tài liệu từ các môn học của các khoa khác nhau, xem tiếp tục các môn học đang học dở, đánh giá phản hồi tài liệu, video bài giảng (nếu có sai sót, thắc mắc).

  - *Giảng viên:* Đăng tải tài liệu, video bài giảng, phản hồi thắc mắc của sinh viên.


### 5. Học nhóm
![Học nhóm](https://github.com/WalterDrake/NT208/assets/87658807/f117807c-f45b-444f-b71e-b8588ac673d1)

- **Mô tả:**
  Bao gồm các lớp học do giảng viên bộ môn tạo vào các group học tập cá nhân, có thể tạo các cuộc họp trực tuyến để trò chuyện, học tập giống như Microsoft Teams.

- **Chức năng:**
  - *Sinh viên:* 
  -Tạo group học.

  -Tạo phòng học riêng tư (có liên kết mời, mã phòng). Chủ phòng được quyền kick thành viên.

  -Nộp bài tập giảng viên giao. 



  - *Giảng viên:* 
  -Tạo phòng học đơn lẻ (có liên kết mời, mã phòng, quyền cho sinh viên vào phòng, kick sv, chặn mic).

  -Tạo lớp học (có liên kết mời vào lớp)

  -Quản lý sinh viên trong group lớp học.

  -Giao dl (chỉnh sửa dl), bài tập.

### 6. Diễn đàn
![Diễn đàn](https://github.com/WalterDrake/NT208/assets/87658807/63366cd8-1ae7-4af9-a6c3-2f682601db23)
![Diễn đàn1](https://github.com/WalterDrake/NT208/assets/87658807/d98fb760-befb-4b55-afd3-7f7975bdfa5c)

## Tham khảo sơ đồ chức năng của web ở link dưới
[Sơ đồ chức năng](https://drive.google.com/file/d/154R6ONFJVh0bGFez0gV-TwrMxyg9wFdx/view)
