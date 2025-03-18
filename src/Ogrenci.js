import React from "react";
import Headertop from "./Headertop"
import Headermenu from "./Headermenu"
import Pagefooter from "./Pagefooter"
import Pagefooterinfo from "./Pagefooterinfo"
function Ogrenci() {
  return (
    <div>
      <div className="page-header">
        {/* BEGIN HEADER TOP */}
       <Headertop/>
        {/* END HEADER TOP */}
        {/* BEGIN HEADER MENU */}
     <Headermenu/>
        {/* END HEADER MENU */}
      </div>
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1>
                Responsive Datatables{" "}
                <small>responsive datatable samples</small>
              </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="javascript:;"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
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
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
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
                <a href="#">Home</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="table_responsive.html">Extra</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="table_responsive.html">Data Tables</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Responsive Datatables</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                <div className="note note-success note-bordered">
                  <p>
                    Please try to re-size your browser window in order to see
                    the tables in responsive mode.
                  </p>
                </div>
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        Responsive Flip Scroll Tables
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse"></a>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    <table className="table table-bordered table-striped table-condensed flip-content">
                      <thead className="flip-content">
                        <tr>
                          <th width="20%">Code</th>
                          <th>Company</th>
                          <th className="numeric">Price</th>
                          <th className="numeric">Change</th>
                          <th className="numeric">Change%</th>
                          <th className="numeric">Open</th>
                          <th className="numeric">High</th>
                          <th className="numeric">Low</th>
                          <th className="numeric">Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AAC</td>
                          <td>AUSTRALIAN AGRICULTURAL COMPANY LIMITED.</td>
                          <td className="numeric">&nbsp;</td>
                          <td className="numeric">-0.01</td>
                          <td className="numeric">-0.36%</td>
                          <td className="numeric">$1.39</td>
                          <td className="numeric">$1.39</td>
                          <td className="numeric">&nbsp;</td>
                          <td className="numeric">9,395</td>
                        </tr>
                        <tr>
                          <td>AAD</td>
                          <td>ARDENT LEISURE GROUP</td>
                          <td className="numeric">$1.15</td>
                          <td className="numeric">+0.02</td>
                          <td className="numeric">1.32%</td>
                          <td className="numeric">$1.14</td>
                          <td className="numeric">$1.15</td>
                          <td className="numeric">$1.13</td>
                          <td className="numeric">56,431</td>
                        </tr>
                        <tr>
                          <td>AAX</td>
                          <td>AUSENCO LIMITED</td>
                          <td className="numeric">$4.00</td>
                          <td className="numeric">-0.04</td>
                          <td className="numeric">-0.99%</td>
                          <td className="numeric">$4.01</td>
                          <td className="numeric">$4.05</td>
                          <td className="numeric">$4.00</td>
                          <td className="numeric">90,641</td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>ADELAIDE BRIGHTON LIMITED</td>
                          <td className="numeric">$3.00</td>
                          <td className="numeric">+0.06</td>
                          <td className="numeric">2.04%</td>
                          <td className="numeric">$2.98</td>
                          <td className="numeric">$3.00</td>
                          <td className="numeric">$2.96</td>
                          <td className="numeric">862,518</td>
                        </tr>
                        <tr>
                          <td>ABP</td>
                          <td>ABACUS PROPERTY GROUP</td>
                          <td className="numeric">$1.91</td>
                          <td className="numeric">0.00</td>
                          <td className="numeric">0.00%</td>
                          <td className="numeric">$1.92</td>
                          <td className="numeric">$1.93</td>
                          <td className="numeric">$1.90</td>
                          <td className="numeric">595,701</td>
                        </tr>
                        <tr>
                          <td>ABY</td>
                          <td>ADITYA BIRLA MINERALS LIMITED</td>
                          <td className="numeric">$0.77</td>
                          <td className="numeric">+0.02</td>
                          <td className="numeric">2.00%</td>
                          <td className="numeric">$0.76</td>
                          <td className="numeric">$0.77</td>
                          <td className="numeric">$0.76</td>
                          <td className="numeric">54,567</td>
                        </tr>
                        <tr>
                          <td>ACR</td>
                          <td>ACRUX LIMITED</td>
                          <td className="numeric">$3.71</td>
                          <td className="numeric">+0.01</td>
                          <td className="numeric">0.14%</td>
                          <td className="numeric">$3.70</td>
                          <td className="numeric">$3.72</td>
                          <td className="numeric">$3.68</td>
                          <td className="numeric">191,373</td>
                        </tr>
                        <tr>
                          <td>ADU</td>
                          <td>ADAMUS RESOURCES LIMITED</td>
                          <td className="numeric">$0.72</td>
                          <td className="numeric">0.00</td>
                          <td className="numeric">0.00%</td>
                          <td className="numeric">$0.73</td>
                          <td className="numeric">$0.74</td>
                          <td className="numeric">$0.72</td>
                          <td className="numeric">8,602,291</td>
                        </tr>
                        <tr>
                          <td>AGG</td>
                          <td>ANGLOGOLD ASHANTI LIMITED</td>
                          <td className="numeric">$7.81</td>
                          <td className="numeric">-0.22</td>
                          <td className="numeric">-2.74%</td>
                          <td className="numeric">$7.82</td>
                          <td className="numeric">$7.82</td>
                          <td className="numeric">$7.81</td>
                          <td className="numeric">148</td>
                        </tr>
                        <tr>
                          <td>AGK</td>
                          <td>AGL ENERGY LIMITED</td>
                          <td className="numeric">$13.82</td>
                          <td className="numeric">+0.02</td>
                          <td className="numeric">0.14%</td>
                          <td className="numeric">$13.83</td>
                          <td className="numeric">$13.83</td>
                          <td className="numeric">$13.67</td>
                          <td className="numeric">846,403</td>
                        </tr>
                        <tr>
                          <td>AGO</td>
                          <td>ATLAS IRON LIMITED</td>
                          <td className="numeric">$3.17</td>
                          <td className="numeric">-0.02</td>
                          <td className="numeric">-0.47%</td>
                          <td className="numeric">$3.11</td>
                          <td className="numeric">$3.22</td>
                          <td className="numeric">$3.10</td>
                          <td className="numeric">5,416,303</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* END SAMPLE TABLE PORTLET*/}
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
    </div>
  );
}

export default Ogrenci;
