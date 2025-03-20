import React from "react";
import Headermenu from "./Headermenu";
import Headertop from "./Headertop";
import Pagefooter from "./Pagefooter";
import Pagefooterinfo from "./Pagefooterinfo";
import { useState, useEffect } from "react";
import axios from "axios";
function NewProduct() {
  //Post işlemi baslangıcı

  // form verilerini tutacak state'ler
  const [productName, setproductName] = useState("");
  const [productID, setproductID] = useState("");
  const [category, setcategory] = useState("");
  const [stockStatus, setstockStatus] = useState("");
  const [Price, setPrice] = useState("");
  const [Currency, setCurrency] = useState("");

  // şehir seçeneklerini almak için state
  const [customer, setCustomerList] = useState([]);

  // Formu gönderirken yapılacak işlem
  const myButtonClick = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle

    let requestBody = {
      productName: productName,
      productID: productID,
      category: category,
      stockStatus: stockStatus,
      Price: Price,
      Currency: Currency,
    };

    try {
      const response = await axios.post(
        "https://private-d90551-merteribol.apiary-mock.com/order", // API URL
        requestBody // Gönderilecek veri
      );

      // API yanıtını kontrol edelim
      console.log(response.data); // Yanıtı console'da görmek için

      // "Result" alanına bakarak işlem başarılı mı kontrol edelim
      if (response.data.Result === "İşlem Başarılı lan") {
        alert(response.data.Result);
      } else {
        alert("Hata oluştu: " + response.data.message || "Bilinmeyen bir hata");
      }
    } catch (error) {
      alert("Bir hata oluştu: " + error.message);
    }
  };

  //Get işlemi başlangıcı
  const [orders, setProductOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://private-d90551-merteribol.apiary-mock.com/ProductOrder"
        );
        setProductOrder(response.data.ProductOrder);
      } catch (error) {
        console.error("Kargo verileri alınamadı:", error);
      }
    };

    fetchData();
  }, []);
  console.log(orders);

  return (
    <div>
      {/* BEGIN HEADER */}
      <div className="page-header">
        {/* BEGIN HEADER TOP */}
        <Headertop />
        {/* END HEADER TOP */}
        {/* BEGIN HEADER MENU */}
        <div className="page-header-menu">
          <div className="container">
            {/* BEGIN MEGA MENU */}
            {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
            {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
            <div className="hor-menu ">
              <Headermenu />
            </div>
            {/* END MEGA MENU */}
          </div>
        </div>
        {/* END HEADER MENU */}
      </div>
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls.html">Ürün Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Yeni Ürün Kayıt</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12 ">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold ">
                        Ürün Kayıt Formu
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form
                      className="form-horizontal"
                      role="form"
                      method="post"
                      name="form1"
                      id="form1"
                    >
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürünün Adı *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="productName"
                              id="strName"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Ürün Adını Giriniz..."
                              onChange={(e) => setproductName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Ürün ID *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="productID"
                              id="strId"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Ürün Id'sini Giriniz..."
                              onChange={(e) => setproductID(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Kategori
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbCurrency"
                              name="cmbCurrency"
                            >
                              {orders.map((ProductOrder, index) => (
                                <option key={index}>
                                  {ProductOrder.kategori}
                                </option> // Burada da cargoStatusName kullanıyoruz
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Stok Durumu *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="stockStatus"
                              id="strStck"
                              className="form-control input-sm"
                              maxLength={5}
                              autoComplete="off"
                              placeholder="Stok Durumunu Giriniz..."
                              onChange={(e) => setproductID(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Fiyat
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="Price"
                              id="strPrice"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Fiyat Bilgisi Giriniz..."
                              onChange={(e) => setPrice(e.target.value)}

                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Para Birimi
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbCurrency"
                              name="cmbCurrency"
                            >
                              {orders.map((ProductOrder, index) => (
                                <option key={index}>
                                  {ProductOrder.ParaBirimi}
                                </option> // Burada da cargoStatusName kullanıyoruz
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-actions right">
                          <button type="submit" className="btn green" onClick={myButtonClick}>
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <Pagefooter />
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <Pagefooterinfo />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
      {/* END FOOTER */}
      {/* BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) */}
      {/* BEGIN CORE PLUGINS */}
      {/*[if lt IE 9]>


<![endif]*/}
      {/* IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip */}
      {/* END CORE PLUGINS */}
      {/* BEGIN PAGE LEVEL PLUGINS */}
      {/* END PAGE LEVEL PLUGINS */}
      {/* END JAVASCRIPTS */}
    </div>
  );
}

export default NewProduct;
