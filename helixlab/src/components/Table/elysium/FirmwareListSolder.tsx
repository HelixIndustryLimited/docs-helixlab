import React from 'react';
import DataTable from 'react-data-table-component';
import Translate from '@docusaurus/Translate';
import CustomButton from '@site/src/components/Button/CustomButton';

const columns = [
  {
    name: (
          <Translate id="table.elysium.firmware_list_hotswap.ver">
            版本
          </Translate>
        ),
    selector: row => row.ver,
    width: '10%'  // 调整列宽
  },
  {
    name: (
      <Translate id="table.elysium.firmware_list_hotswap.code">
        代号
      </Translate>
    ),
    selector: row => row.code,
    width: '10%'  // 调整列宽
  },
  {
    name: (
      <Translate id="table.elysium.firmware_list_hotswap.info">
        信息
      </Translate>
    ),
    selector: row => row.info,
    width: '50%px'  // 调整列宽
  },
  {
    name:  (
      <Translate id="table.elysium.firmware_list_hotswap.download">
        下载
      </Translate>
    ),
    selector: row => row.download,
    width: '30%'  // 调整列宽
  },
];

const data = [
  {
    ver: '1.0.0',
    code: '0',
    info: (
          <Translate id="table.elysium.firmware_list_hotswap.info_102">
            R0 出厂固件
          </Translate>
        ),
    download: (
      <div style={{ display: 'flex', gap: '1px'}}>
        <CustomButton 
          href="https://cdn.shopify.com/s/files/1/0444/8259/2928/files/helix_elysium_soldered_1.0.0.uf2"
          target="_self"
        >
          firmware.uf2
        </CustomButton>
        <CustomButton 
          href="https://cdn.shopify.com/s/files/1/0444/8259/2928/files/helixlab_elysium_solder_1.0.0.json.zip"
          target="_self"
        >
          via.json
        </CustomButton>
      </div>
    ),
  },
];

export default function ElysiumFirmwareTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  );
}
