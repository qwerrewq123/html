import React from "react";
import "../style/RepairDetail.css";
function RepairDetail() {
  return (
    <>
      <input type="hidden" id="anPageName" name="page" value="repairdetail" />
      <div class="container-center-horizontal">
        <div class="repairdetail screen">
          <header class="header">
            <div class="overlap-group2">
              <div class="overlap-group1">
                <div class="container">
                  <div class="sidebar">
                    <div class="border"></div>
                    <div class="border"></div>
                    <div class="horizontal-border"></div>
                  </div>
                  <div class="navbar">
                    <div class="navbar-link-text-8 valign-text-middle navbar-link-text notosanskr-normal-shark-18px">
                      가맹점관리
                    </div>
                    <div class="navbar-link-text-5 valign-text-middle navbar-link-text notosanskr-normal-shark-18px">
                      판매상품관리
                    </div>
                    <div class="navbar-link-text-9 valign-text-middle navbar-link-text notosanskr-normal-shark-18px">
                      메뉴관리
                    </div>
                    <div class="navbar-link-text-6 valign-text-middle navbar-link-text">
                      매출관리
                    </div>
                    <div class="navbar-link-text-7 valign-text-middle navbar-link-text notosanskr-normal-shark-18px">
                      커뮤니티
                    </div>
                  </div>
                  <img
                    class="image-1"
                    src={require("../img/image-1.png")}
                    alt="image 1"
                  />
                  <img
                    class="group"
                    src={require("../img/group@2x.png")}
                    alt="Group"
                  />
                </div>
                <h1 class="cc valign-text-middle">
                  <span>
                    <span class="span">C</span>
                    <span class="span1">ᴗ</span>
                    <span class="span">C</span>{" "}
                  </span>
                </h1>
              </div>
              <div class="sidemenu">
                <div class="text-11 valign-text-middle">본사1</div>
                <div class="vertical-divider"></div>
                <div class="text-10 valign-text-middle">로그아웃</div>
              </div>
            </div>
          </header>
          <div class="heading-2 valign-text-middle">수리 상세</div>
          <div class="frame-container">
            <div class="frame-119">
              <div class="frame-117">
                <div class="text valign-text-middle notosanskr-medium-black-16px">
                  가맹점명
                </div>
              </div>
              <div class="frame-118">
                <div class="text-13 valign-text-middle notosanskr-light-black-16px">
                  독산역 1호점
                </div>
              </div>
            </div>
            <div class="frame-120">
              <div class="frame-117">
                <div class="text valign-text-middle notosanskr-medium-black-16px">
                  수리유형 *
                </div>
              </div>
              <div class="frame-118">
                <div class="input">
                  <div class="text-15 valign-text-middle notosanskr-light-black-16px">
                    기기 세척
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-12">
            <div class="frame-117">
              <div class="text valign-text-middle notosanskr-medium-black-16px">
                상품코드 *
              </div>
            </div>
            <div class="frame-1">
              <div class="frame-134">
                <div class="input-1 input-5">
                  <div class="a12345 valign-text-middle notosanskr-light-black-16px">
                    A12345
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-12">
            <div class="frame-117">
              <div class="text valign-text-middle notosanskr-medium-black-16px">
                수리접수날짜*
              </div>
            </div>
            <div class="frame-1">
              <div class="input-2 input-5">
                <div class="date valign-text-middle notosanskr-light-black-16px">
                  2024/01/01
                </div>
              </div>
            </div>
          </div>
          <div class="frame-124">
            <div class="frame-117">
              <div class="text valign-text-middle notosanskr-medium-black-16px">
                카테고리*
              </div>
            </div>
            <div class="frame-1">
              <div class="input-3 input-5">
                <div class="text-19 valign-text-middle notosanskr-light-black-16px">
                  머신/소기구
                </div>
              </div>
            </div>
          </div>
          <div class="frame-123">
            <div class="frame-117">
              <div class="text valign-text-middle notosanskr-medium-black-16px">
                내용 *
              </div>
            </div>
            <div class="frame-118-1">
              <div class="input-4 input-5">
                <div class="text-21 valign-text-middle notosanskr-light-black-16px">
                  수리중입니다
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <div class="overlap-group3">
              <div class="text-22 valign-text-middle">메뉴 등록</div>
              <div class="small-btn_brown">
                <div class="text-23 valign-text-middle">수리중 변경</div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="footer-contents">
              <div class="flex-row flex">
                <div class="flex-col flex">
                  <div class="overlap-group">
                    <p class="x valign-text-middle notosanskr-light-coconut-12px">
                      상호명 : ㈜더블유컨셉코리아 ㅣ 대표자 : 이주철 ㅣ 주소 :
                      서울특별시 강남구 테헤란로 231, EAST동 20층(역삼동,
                      센터필드)
                      <br />
                      사업자등록번호 : 211-88-19183 ㅣ 통신판매업신고 :
                      제2009호-서울강남-00847호
                    </p>
                    <div class="text-1 valign-text-middle">사업자정보확인</div>
                    <p class="text-2 valign-text-middle notosanskr-light-coconut-12px">
                      │ 개인정보보호책임자 : 허선희 │ 호스팅서비스 : ㈜
                      더블유컨셉코리아
                    </p>
                  </div>
                  <p class="copyright valign-text-middle notosanskr-light-coconut-12px">
                    COPYRIGHT ⓒ ㈜더블유컨셉코리아 ALL RIGHTS RESERVED
                  </p>
                </div>
                <div class="vertical-divider-1"></div>
              </div>
              <div class="flex-col-1">
                <p class="heading-3 valign-text-middle">
                  <span>
                    <span class="span0">
                      소비자피해보상보험
                      <br />
                    </span>
                    <span class="span1-1">
                      고객님은 안전거래를 위해 현금 결제 시, Wconcept 에서
                      가입한
                      <br />
                      소비자피해보상보험 서비스를 이용하실 수 있습니다.
                    </span>
                  </span>
                </p>
                <div class="text-container">
                  <div class="text-3 valign-text-middle notosanskr-light-coconut-12px">
                    보상대상 : 미배송/반품, 환불거부/쇼핑몰부도
                  </div>
                  <div class="text-4 valign-text-middle">
                    서비스 가입사실 확인
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default RepairDetail;
