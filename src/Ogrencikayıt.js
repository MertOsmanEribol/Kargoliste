import React from "react";
import Headertop from "./Headertop"
import Headermenu from "./Headermenu"
import Pagefooter from "./Pagefooter"
import Pagefooterinfo from "./Pagefooterinfo"

function Ogrencikayıt(){
    return(

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
          {/* BEGIN PAGE HEAD */}
          <div className="page-head">
            <div className="container">
              {/* BEGIN PAGE TITLE */}
              <div className="page-title">
                <h1>Öğrenci Form</h1>
              </div>
              {/* END PAGE TITLE */}
              {/* BEGIN PAGE TOOLBAR */}
              <div className="page-toolbar">
                {/* BEGIN THEME PANEL */}
                <div className="btn-group btn-theme-panel">
                  <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                    <i className="icon-settings" />
                  </a>
                  <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <h3>THEME COLORS</h3>
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="theme-colors">
                              <li className="theme-color theme-color-default" data-theme="default">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Default</span>
                              </li>
                              <li className="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Blue Hoki</span>
                              </li>
                              <li className="theme-color theme-color-blue-steel" data-theme="blue-steel">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Blue Steel</span>
                              </li>
                              <li className="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Orange</span>
                              </li>
                              <li className="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Yellow Crusta</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul className="theme-colors">
                              <li className="theme-color theme-color-green-haze" data-theme="green-haze">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Green Haze</span>
                              </li>
                              <li className="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Red Sunglo</span>
                              </li>
                              <li className="theme-color theme-color-red-intense" data-theme="red-intense">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Red Intense</span>
                              </li>
                              <li className="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Purple Plum</span>
                              </li>
                              <li className="theme-color theme-color-purple-studio" data-theme="purple-studio">
                                <span className="theme-color-view" />
                                <span className="theme-color-name">Purple Studio</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                        <h3>LAYOUT</h3>
                        <ul className="theme-settings">
                          <li>
                            Theme Style
                            <select className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" data-original-title="Change theme style" data-container="body" data-placement="left">
                              <option value="boxed" selected="selected">
                                Square corners
                              </option>
                              <option value="rounded">Rounded corners</option>
                            </select>
                          </li>
                          <li>
                            Layout
                            <select className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
                              <option value="boxed" selected="selected">
                                Boxed
                              </option>
                              <option value="fluid">Fluid</option>
                            </select>
                          </li>
                          <li>
                            Top Menu Style
                            <select className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body" data-placement="left">
                              <option value="dark" selected="selected">Dark</option>
                              <option value="light">Light</option>
                            </select>
                          </li>
                          <li>
                            Top Menu Mode
                            <select className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                              <option value="fixed">Fixed</option>
                              <option value="not-fixed" selected="selected">
                                Not Fixed
                              </option>
                            </select>
                          </li>
                          <li>
                            Mega Menu Style
                            <select className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body" data-placement="left">
                              <option value="dark" selected="selected">Dark</option>
                              <option value="light">Light</option>
                            </select>
                          </li>
                          <li>
                            Mega Menu Mode
                            <select className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body" data-placement="left">
                              <option value="fixed" selected="selected">
                                Fixed
                              </option>
                              <option value="not-fixed">Not Fixed</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END THEME PANEL */}
              </div>
              {/* END PAGE TOOLBAR */}
            </div>
          </div>
          {/* END PAGE HEAD */}
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
                    <div className="modal-body">Widget settings form goes here</div>
                    <div className="modal-footer">
                      <button type="button" className="btn blue">Save changes</button>
                      <button type="button" className="btn default" data-dismiss="modal">
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
                <li><a href="#">Home</a><i className="fa fa-circle" /></li>
                <li>
                  <a href="form_controls_md.html">UI Components</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">Material Design Form Controls</li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              {/* BEGIN PAGE CONTENT INNER */}
              {/* Öğrenci kayıt formu başlangıc */}
              <div className="row">
                <div className="col-lg-12">
                  {/* BEGIN SAMPLE FORM PORTLET*/}
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption font-red-sunglo">
                        <i className="icon-settings font-red-sunglo" />
                        <span className="caption-subject bold uppercase">
                          Öğrenci Kayıt</span>
                      </div>
                    </div>
                    {/* form elementleri  */}
                    <div className="portlet-body form">
                      <form role="form">
                        <div className="form-body">
                          <div className="form-group form-md-line-input">
                            <input type="text" className="form-control" id="form_control_1" placeholder="Adınız" />
                            <label htmlFor="form_control_1">Adınız</label>
                            <span className="help-block">Adınızı Girin</span>
                          </div>
                          <div className="form-group form-md-line-input">
                            <input type="text" className="form-control" id="form_control_1" placeholder="Soyadınız" />
                            <label htmlFor="form_control_1">Soyadınız</label>
                            <span className="help-block">Soyadınızı Girin</span>
                          </div>
                          <div className="form-group form-md-line-input">
                            <div className>
                              <input className="form-control form-control-inline input-medium date-picker" size={16} type="text" defaultValue placeholder="Doğrum Tarihiniz" />
                              <label className="control-label">Doğum Tarihi</label>
                              <span className="help-block"> Tarih Seçin</span>
                            </div>
                          </div>
                          <div className="form-group form-md-line-input">
                            <input type="email" className="form-control" id="form_control_1" placeholder="ornek@mail.com" />
                            <label htmlFor="form_control_1">Email Adresiniz</label>
                            <span className="help-block">ornek@mail.com</span>
                          </div>
                          <div className="form-group form-md-line-input">
                            <input type="number" className="form-control" id="form_control_1" placeholder={5325325325} />
                            <label htmlFor="form_control_1">GSM</label>
                            <span className="help-block">Telefon numaranızı başında "0" olmadan girin.</span>
                          </div>
                          <div className="form-group form-md-line-input has-info">
                            <select className="form-control" id="form_control_1">
                              <option value={0} selected>
                                Lütfen Şehir Seçiniz
                              </option>
                              <option value={1}>İstanbul</option>
                              <option value={2}>Mersin</option>
                              <option value={3}>Ankara</option>
                              <option value={4}>İzmir</option>
                            </select>
                            <label htmlFor="form_control_1">Şehir</label>
                          </div>
                          <div className="form-group form-md-line-input">
                            <textarea className="form-control" rows={3} placeholder="Adresinizi Girin" maxLength={70} defaultValue={""} />
                            <label htmlFor="form_control_1">Adres</label>
                          </div>
                        </div>
                        <div className="form-actions noborder">
                          <button type="button" className="btn blue">Gönder</button>
                          <button type="button" className="btn default">İptal</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* END SAMPLE FORM PORTLET*/}
                  {/* BEGIN SAMPLE FORM PORTLET*/}
                  {/* END SAMPLE FORM PORTLET*/}
                  {/* BEGIN SAMPLE FORM PORTLET*/}
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
      <Pagefooter/>
        {/* END PRE-FOOTER */}
        {/* BEGIN FOOTER */}
       <Pagefooterinfo/>
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
        {/* BEGIN PAGE LEVEL SCRIPTS */}
        {/* END PAGE LEVEL SCRIPTS */}
        {/* END JAVASCRIPTS */}
      </div>
   

    )
}

export default Ogrencikayıt