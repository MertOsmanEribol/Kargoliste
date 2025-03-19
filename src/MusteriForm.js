import React, { useState, useEffect } from "react";
import axios from "axios";
import Headermenu from "./Headermenu";
import Headertop from "./Headertop";
import Pagefooter from "./Pagefooter";
import Pagefooterinfo from "./Pagefooterinfo";
import { motion } from "framer-motion";

function MusteriForm() {
  // form verilerini tutacak state'ler
  const [strName, setstrName] = useState("");
  const [strSurname, setstrSurname] = useState("");
  const [strMail, setstrMail] = useState("");
  const [strGSM, setstrGSM] = useState("");
  const [strAdres, setstrAdres] = useState("");

  // şehir seçeneklerini almak için state
  const [customer, setCustomerList] = useState([]);

  // Formu gönderirken yapılacak işlem
  const myButtonClick = async (e) => {
	e.preventDefault(); // Formun varsayılan davranışını engelle
  
	let requestBody = {
	  strName: strName,
	  strSurname: strSurname,
	  strMail: strMail,
	  strGSM: strGSM,
	  strAdres: strAdres,
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
  

  // şehir verilerini API'den almak
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://private-d90551-merteribol.apiary-mock.com/customerlist"
        );
        setCustomerList(response.data.CustomerList);
      } catch (error) {
        console.error("Müşteri verileri alınamadı:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* BEGIN HEADER */}
      <div className="page-header">
        <Headertop />
        <div className="page-header-menu">
          <div className="container">
            <div className="hor-menu">
              <Headermenu />
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Ana Sayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls.html">Müşteri Yönetimi</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Müşteri Kayıt Formu</li>
            </ul>

            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Müşteri Kayıt Formu
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
                          <label className="col-md-3 control-label">Ad *</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strName"
                              id="strName"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Adınızı Giriniz..."
                              onChange={(e) => setstrName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Soyad *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strSurname"
                              id="strSurname"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Soyadınızı Giriniz..."
                              onChange={(e) => setstrSurname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Mail Adresi *
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strMail"
                              id="strMail"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="adiniz@ymail.com"
                              onChange={(e) => setstrMail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">GSM</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strGSM"
                              id="strGSM"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="5054443322"
                              onChange={(e) => setstrGSM(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Adres</label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              rows={3}
                              id="strAdres"
                              name="strAdres"
                              onChange={(e) => setstrAdres(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Şehir</label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbCurrency"
                              name="cmbCurrency"
                            >
                              {customer.map((customer, index) => (
                                <option key={index}>{customer.sehir}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-actions right">
                          <button
                            type="submit"
                            className="btn green"
                            onClick={myButtonClick}
                          >
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BEGIN FOOTER */}
      <motion.div
        className="footer-container"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
        animate={{
          y: 0,
        }}
        initial={{
          y: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Pagefooter />
        <Pagefooterinfo />
      </motion.div>
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
      {/* END FOOTER */}
    </div>
  );
}

export default MusteriForm;
