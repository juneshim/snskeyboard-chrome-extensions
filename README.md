
---

# 🌟 snskeyboard Chrome Extension

> **이모티콘 버튼으로 쉽고 빠르게 클립보드에 텍스트를 복사하세요!**  
> 이 확장 프로그램은 이모티콘 텍스트를 선택하고 즐겨찾기에 추가하거나 삭제할 수 있는 기능을 제공합니다.

---

## 📌 주요 기능

1. **즐겨찾기 추가**  
   - **동작**:  
     - 즐겨찾기 우측에 `+`버튼으로 즐겨찾기 등록 가능합니다.
   - **데이터 저장**:  
     - 즐겨찾기에 저장된 데이터는 `chrome.storage.sync`에 자동으로 저장되기 때문에 같은 계정에서 데이터가 공유됩니다.
    
      <p aligin="center">
        <img src="https://github.com/user-attachments/assets/3446eb1b-6a0f-453c-b5c8-03d438015acb">
      </p>

2. **즐겨찾기 삭제**  
   - **동작**:  
     - 즐겨찾기 우측에 `x`버튼으로 즐겨찾기 삭제 가능합니다.
    
      <p aligin="center">
        <img src="https://github.com/user-attachments/assets/787064dd-c1e2-44ac-8741-8044198f3307">
      </p>

3. **빠른 탐색**  
   - **동작**:  
     - 종류별로 특수문자를 분류해서 제공합니다.
    
      <p aligin="center">
        <img src="https://github.com/user-attachments/assets/5874f122-7473-4e23-a55d-d5f26b8c7bb8">
      </p>
      
4. **사용 예시**  
      <p aligin="center">
        <img src="https://github.com/user-attachments/assets/b2e86934-2482-4c4f-be2c-74ead68bcd05">
      </p>


---

## 🛠️ 설치 방법

### 1. Chrome 웹 스토어에서 설치
원작자의 배포 허가를 받지 못해서 배포하지 않습니다.

### 2. 로컬에서 설치 
원작자의 배포 허가를 받지 못해서 배포하지 않습니다.
현재 저장된 버전은 이모티콘이 담긴 txt파일이 제외되었습니다.

1. 이 저장소를 클론하거나 다운로드합니다.
   ```bash
   git clone https://github.com/juneshim/snskeyboard-chrome-extensions.git
   ```
2. Chrome 브라우저를 열고 `chrome://extensions/`로 이동합니다.
3. "개발자 모드"를 활성화합니다.
4. "압축 해제된 확장 프로그램 로드"를 클릭하고, 클론한 폴더를 선택합니다.

---

## 🚀 사용 방법

1. 설치 후, 브라우저의 확장 아이콘을 클릭하세요.
2. 빠른 탐색으로 원하는 종류를 선택하세요
3. 특수문자를 누르면 클립보드에 복사됩니다
4. 즐겨찾기 기능으로 자주 사용하는 특수문자 간편하게 이용해요

---

## 📂 프로젝트 구조

```
프로젝트 루트/
├── manifest.json 
├── background.js
├── popup.js
├── assets/
│   ├── fonts/ 
│   ├── icons/
│   ├── category.txt
│   ├── class.txt
│   └── 1~43.txt 
└── styles/
    └── popup.css 
```

---


## 📄 라이선스

This project is licensed under the terms of the [MIT License](LICENSE).
이 프로젝트는 개인적으로 진행한 [snskeybord](https://snskeyboard.com/emoticon/)의 확장 프로그램입니다.

---

## 📧 문의

질문이나 문제가 있으면 [이메일](mailto:june.shim2@gmail.com)로 문의해주세요.

---

## ⭐️ 기여자 목록

- [GitHub 프로필](https://github.com/juneshim)

---

