import React from 'react'
import Headermenu from './Headermenu'
import Headertop from "./Headertop"
import Pagefooter from './Pagefooter'
import Pagefooterinfo from './Pagefooterinfo'
import { useState, useEffect } from "react";
import axios from "axios";

function FormCargo() {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://private-f2e779-itoapi.apiary-mock.com/cargo"
        );
        setCargos(response.data.Cargos);
      } catch (error) {
        console.error("Kargo verileri alınamadı:", error);
      }
    };

    fetchData();
  }, []);
  console.log(cargos);




  const [cargoStatus, setCargoStatusList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://private-d90551-merteribol.apiary-mock.com/cargostatus"
        );
        setCargoStatusList(response.data.CargoStatusList);
      } catch (error) {
        console.error("Kargo verileri alınamadı:", error);
      }
    };

    fetchData();
  }, []);
  console.log(cargoStatus);


  return (
    <div>
    {/* BEGIN HEADER */}
    <div className="page-header">
      {/* BEGIN HEADER TOP */}
      <Headertop/>
      {/* END HEADER TOP */}
      {/* BEGIN HEADER MENU */}
      <Headermenu/>
      {/* END HEADER MENU */}
    </div>
    {/* END HEADER */}
    {/* BEGIN PAGE CONTAINER */}
    <div className="page-container">
      {/* BEGIN PAGE CONTENT */}
      <div className="page-content">
        <div className="container">
          {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
          <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                  Widget settings form goes here
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn blue">Save changes</button>
                  <button type="button" className="btn default" data-dismiss="modal">Close</button>
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
              <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
            </li>
            <li>
              <a href="FormOrder.html">Sipariş Yönetimi</a>
              <i className="fa fa-circle" />
            </li>
            <li className="active">
              Yeni Kargo
            </li>
          </ul>
          {/* END PAGE BREADCRUMB */}
          {/* BEGIN PAGE CONTENT INNER */}
          <div className="row">
            <div className="col-md-12 ">
              {/* BEGIN SAMPLE FORM PORTLET*/}
              <div className="portlet light">
                <div className="portlet-title">
                  <div className="caption">
                    <span className="caption-subject font-green-sharp bold ">Kargo Kayıt Formu</span>
                  </div>
                  <div className="tools">
                    <a href="javascript:;" className="collapse">
                    </a>
                  </div>
                </div>
                <div className="portlet-body form">
                  <form className="form-horizontal" role="form" method="post" name="form1" id="form1">
                    <div className="form-body">
                      <div className="form-group">
                        <label className="col-md-3 control-label">Sipariş No</label>
                        <div className="col-md-9">
                        <select className="form-control" id="cmbCurrency" name="cmbCurrency">
                        {cargos.map((cargo, index) => (
                      <option key={index}>{cargo.CargoNo}</option> // Burada da cargoStatusName kullanıyoruz
                    ))}
                        
                        </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Kargo Tarihi</label>
                      <div className="col-md-9">
                        <input className="form-control input-medium date-picker" size={16} type="date" name="dtBirthDate" id="dtBirthDate" autoComplete="off" defaultValue />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-3">Teslim Tarihi</label>
                      <div className="col-md-9">
                        <input className="form-control input-medium date-picker" size={16} type="date" name="dtBirthDate" id="dtBirthDate" autoComplete="off" defaultValue />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">Kargo Durumu</label>
                      <div className="col-md-9">

                      {cargoStatus.length > 0 ? ( // Verinin varlığını kontrol et
                  <select className="form-control" id="cmbCurrency" name="cmbCurrency">
                    {cargoStatus.map((cargolist, index) => (
                      <option key={index}>{cargolist.CargoStatusName}</option> // Burada da cargoStatusName kullanıyoruz
                    ))}
                  </select>
                ) : (
                  <p>Yükleniyor...</p> // Eğer veriler yüklenmiyorsa bir yükleniyor mesajı gösterelim
                )}
                        
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">Kargo Firması</label>
                      <div className="col-md-9">
                        <select className="form-control" id="cmbCurrency" name="cmbCurrency">
                        {cargos.map((cargo, index) => (
                      <option key={index}>{cargo.CargoCompany}</option> // Burada da cargoStatusName kullanıyoruz
                    ))}
                        
                        </select>
                      </div>
                    </div>								
                    <div className="form-actions right">
                      <button type="submit" className="btn green">Kaydet</button>
                    </div>
                  </form></div>
              </div>
            </div>
            {/* END SAMPLE FORM PORTLET*/}
          </div>
        </div>
        {/* END PAGE CONTENT INNER */}
      </div>
    </div>
    {/* END PAGE CONTENT */}
    {/* END PAGE CONTAINER */}
    {/* BEGIN PRE-FOOTER */}
   <Pagefooter/>
    {/* END PRE-FOOTER */}
    {/* BEGIN FOOTER */}
    <Pagefooterinfo  />
    <div className="scroll-to-">
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
  )
}

export default FormCargo