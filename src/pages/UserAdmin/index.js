import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const index = () => {
  return (
    <div className="mt-20 mx-auto">
      <div className="max-w-xs">
        <Sidebar />
      </div>

      <div className="text-left ml-64 pt-24 pl-24">
        <div className="ml-1">
          <div className="flex flex-cols-3 gap-52">
            <h2 className="mb-2">ความคิดเห็นทั้งหมด</h2>

            <div className="">
              <input
                type="text"
                placeholder="ค้นหา"
                class="input input-bordered w-96 max-w-xs"
              ></input>
              <div className="fa-solid fa-magnifying-glass ml-2" />
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <h3>เรียงตาม :</h3>
            <select className="select select-bordered select-sm w-26 h-5 max-w-xs">
              <option disabled="" selected="">
                ตัวอักษร
              </option>
            </select>
          </div>

          <div className="mt-5  rounded-md">
            <table className="table table-active w-full">
              <thead className="h-11">
                <tr className="active text-center">
                  <th className="text-sm">ชื่อผู้รีวิว</th>
                  <th className="text-sm">อาหารรีวิว</th>
                  <th className="text-sm">คะแนน</th>
                  <th className="text-sm">วันที่สร้าง</th>
                  <th className="text-sm">วันที่อัพเดท</th>
                  <th className="text-sm">ข้อความรีวิว</th>
                  <th />
                </tr>
              </thead>

              <div className="mt-2" />

              <tbody>
                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ยำแซลม่อน</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ยำแซลม่อน</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ยำแซลม่อน</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20  text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ยำแซลม่อน</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>

                <div className="mt-1" />

                <tr className="active text-center mb-2 font-mono">
                  <td className="text-xs rounded">สิรภพ ทองดอนพุ่ม</td>
                  <td className="text-xs">ไข่หวานน้ำแห้ง</td>
                  <td className="text-xs">5</td>
                  <td className="text-xs">18-1-2565 12:56</td>
                  <td className="text-xs">-</td>
                  <td className="text-xs">
                    อร่อยมากเลย
                    ความรู้สึกรับรู้ได้ถึงปลาแซลมอนที่เนื้อมีความอิ่มตัวมาก
                    <tr />
                    ทำให้อยากทานทุกวันเลย ชอบมาก
                  </td>
                  <th className="rounded">
                    <button className="fa-solid fa-trash btn btn-error btn-md h-12 w-20 text-white text-slate-100">
                      ลบ
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>

            <div className="btn-group mt-3 justify-center">
              <button type="radio" name="options" className="btn text-base">
                ก่อนหน้า
              </button>
              <input
                type="radio"
                name="options"
                data-title={1}
                className="btn"
              />
              <input
                type="radio"
                name="options"
                data-title={2}
                className="btn btn-active"
              />
              <input
                type="radio"
                name="options"
                data-title={3}
                className="btn"
              />
              <input
                type="radio"
                name="options"
                data-title={4}
                className="btn"
              />
              <button type="radio" name="options" className="btn text-base">
                ต่อไป
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
