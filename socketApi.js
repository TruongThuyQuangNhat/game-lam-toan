var socket = require('socket.io');

let io = socket();
let SocketApi = {};
SocketApi.io = io;

let Room = [];// lưu trũ tất cả các room hiện có
let ListUserName = []//lưu trữ tất cả user hiện có
let ListUserNameandRoom = []//lưu trữ { room, name}
let CauHoivaKetQua = [] // lưu trữ {room, cauhoi, ketqua, thutucauhoi}
let Database = []
// {
//     thutucauhoi,
//     name,
//     room,
//     cauhoi,
//     ketqua,
//     dung,
//     thoigan
// }
let ThongKe = [] // {name, diem, tongthoigian, id, room}
let ThoiGianBatDau = [] //{room, thoigianbatdau}
let KyTuChoPhep = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let DaLamXong10Cau = [] // [name]

function CHvaKQ(room) {
    let cauhoi = '';
    let ketqua = 0;
    const arr = ["+", "-", "x"]
    const mot0 = Math.floor(Math.random() * 10); //0-9
    const mot1 = Math.floor(Math.random() * 10); //0-9
    const mot2 = Math.floor(Math.random() * 10); //0-9
    const mot3 = Math.floor(Math.random() * 10); //0-9

    cauhoi = mot0 + " " + arr[Math.floor(Math.random() * 3)] + " "
        + mot1 + " " + arr[Math.floor(Math.random() * 3)] + " "
        + mot2 + " " + arr[Math.floor(Math.random() * 3)] + " "
        + mot3

    const phantucauhoi = cauhoi.split(' ')

    if (phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x') {
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+') {
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if (phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-') {
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    }

    let result = { cauhoi, ketqua, room };
    return result;
}
function KhongCoKyTuDacBiet(string) {
    const arr = [...string]
    for (let i = 0; i < arr.length; i++) {
        if (!KyTuChoPhep.includes(arr[i])) {
            return false;
        }
    }
    return true
}

io.on('connection', (socket) => {
    console.log('user connection: ', socket.id);

    socket.on('client-send-choitiep', () => {
        //Xóa các dữ liệu cũ có trùng room
        CauHoivaKetQua = CauHoivaKetQua.filter(i => i.room !== socket.room)
        Database = Database.filter(i => i.room !== socket.room)
        console.log('truoc', DaLamXong10Cau);
        const arrName = [] // chứa các name ở trong room
        ThongKe.map(i => {
            if (i.room === socket.room && DaLamXong10Cau.includes(i.name)) {
                arrName.push(i.name);
            }
        })
        DaLamXong10Cau = DaLamXong10Cau.filter(i => !arrName.includes(i))
        console.log('sau', DaLamXong10Cau);
        ThongKe = ThongKe.filter(i => i.room !== socket.room)
        ThoiGianBatDau = ThoiGianBatDau.filter(i => i.room !== socket.room)

        // Generate dữ liệu mới
        for (let i = 1; i <= 10; i++) {
            const chvakq = CHvaKQ(socket.room); // trả về {cauhoi, ketqua, room}
            const result = {
                ...chvakq,
                thutucauhoi: i
            }
            CauHoivaKetQua.push(result);
        }
        ThoiGianBatDau.push({ room: socket.room, thoigianbatdau: new Date() })
        socket.cauhoihientai = 1;
        const ArrCHvaKQ = CauHoivaKetQua.filter((item) => { return item.room === socket.room })
        const data = ArrCHvaKQ.filter((item) => { return item.thutucauhoi === 1 })
        io.in(socket.room).emit('server-send-time');
        io.in(socket.room).emit('server-send-chvakq', data[0]);
        socket.diem = 0;
        io.in(socket.room).emit('server-send-choitiep')

        const newArr = []
        ListUserNameandRoom.map((l) => {
            if (l.room === socket.room) {
                newArr.push(l.name);
            }
        })
        socket.emit('room-ok')
        io.in(socket.room).emit('Phong-and-ListUser', {
            Phong: socket.room,
            ListUser: newArr
        })
    })

    socket.on('client-send-room', (room) => {
        if (KhongCoKyTuDacBiet(room) && room !== '') {
            let i = CauHoivaKetQua.find((item) => {
                return item.room === room
            })

            if (i === undefined) {// nếu room đang chờ
                if (!Room.includes(room)) {
                    Room.push(room);
                    //update phongchow-phongchoi
                    const arrPhongChoi = []
                    CauHoivaKetQua.map((i) => {
                        if (!arrPhongChoi.includes(i.room)) {
                            arrPhongChoi.push(i.room);
                        }
                    })
                    const arrPhongCho = Room.filter(r => !arrPhongChoi.includes(r));
                    io.emit('phongcho-phongchoi', { phongcho: arrPhongCho, phongchoi: arrPhongChoi })
                }
                socket.room = room;
                socket.join(room);

                ListUserNameandRoom.push({ room: room, name: socket.username });
                const newArr = []
                ListUserNameandRoom.map((l) => {
                    if (l.room === room) {
                        newArr.push(l.name);
                    }
                })
                socket.emit('room-ok')
                io.in(room).emit('Phong-and-ListUser', {
                    Phong: socket.room,
                    ListUser: newArr
                })
            } else {
                socket.emit('room-da-ton-tai')//room đang chơi, không thể vào
            }
        } else {
            socket.emit('kytusai', 'room')
        }
    })

    socket.on('client-send-name', (name) => {
        if (KhongCoKyTuDacBiet(name) && name !== '') {
            if (ListUserName.includes(name)) {
                socket.emit('username-trung');
            } else {
                socket.username = name;
                ListUserName.push(name);
                socket.emit('username-ok')

                //update phongchow-phongchoi
                const arrPhongChoi = []
                CauHoivaKetQua.map((i) => {
                    if (!arrPhongChoi.includes(i.room)) {
                        arrPhongChoi.push(i.room);
                    }
                })
                const arrPhongCho = Room.filter(r => !arrPhongChoi.includes(r));
                io.emit('phongcho-phongchoi', { phongcho: arrPhongCho, phongchoi: arrPhongChoi })
            }
        } else {
            socket.emit('kytusai', 'name')
        }
    })

    socket.on('client-send-btn-start', () => {
        for (let i = 1; i <= 10; i++) {
            const chvakq = CHvaKQ(socket.room); // trả về {cauhoi, ketqua, room}
            const result = {
                ...chvakq,
                thutucauhoi: i
            }
            CauHoivaKetQua.push(result);
        }
        ThoiGianBatDau.push({ room: socket.room, thoigianbatdau: new Date() })
        socket.cauhoihientai = 1;
        const ArrCHvaKQ = CauHoivaKetQua.filter((item) => { return item.room === socket.room })
        const data = ArrCHvaKQ.filter((item) => { return item.thutucauhoi === 1 })
        io.in(socket.room).emit('server-send-chvakq', data[0]);
        io.in(socket.room).emit('server-send-time');

        //update phongcho-phongchoi
        const arrPhongChoi = []
        CauHoivaKetQua.map((i) => {
            if (!arrPhongChoi.includes(i.room)) {
                arrPhongChoi.push(i.room);
            }
        })
        const arrPhongCho = Room.filter(r => !arrPhongChoi.includes(r));
        io.emit('phongcho-phongchoi', { phongcho: arrPhongCho, phongchoi: arrPhongChoi })

        socket.diem = 0;
    })

    socket.on('client-send-dapan', (data) => {
        const result = CauHoivaKetQua.filter((item) => {
            return item.room === socket.room && item.thutucauhoi === data.thutucauhoi
        })
        if (result[0].cauhoi === data.cauhoi) {
            if (result[0].ketqua === parseInt(data.ketqua)) {
                if (data.thutucauhoi === 1) {
                    const a = new Date(data.thoigian);
                    const c = ThoiGianBatDau.filter((item) => {
                        return item.room === socket.room
                    })
                    const b = new Date(c[0].thoigianbatdau);
                    const db = {
                        thutucauhoi: data.thutucauhoi,
                        name: socket.username,
                        room: socket.room,
                        cauhoi: data.cauhoi,
                        ketqua: data.ketqua,
                        kqclient: data.ketqua,
                        dung: 1,
                        thoigian: Math.round((Math.abs(a - b) / 1000) * 1000) / 1000
                    }
                    socket.thoigian = db.thoigian;
                    socket.diem = 1;
                    Database.push(db);
                } else {
                    const item = Database.filter((item) => {
                        return item.room === socket.room && item.name === socket.username
                    })
                    if (item.length === 1) {
                        tongThoiGian = item[0].thoigian;
                    } else {
                        tongThoiGian = item.reduce( // tổng thời gian hiện có
                            (previousValue, currentValue) => previousValue.thoigian + currentValue.thoigian, 0
                        );
                    }
                    const a = new Date(data.thoigian);
                    const c = ThoiGianBatDau.filter((item) => {
                        return item.room === socket.room
                    })
                    const b = new Date(c[0].thoigianbatdau);
                    const db = {
                        thutucauhoi: data.thutucauhoi,
                        name: socket.username,
                        room: socket.room,
                        cauhoi: data.cauhoi,
                        ketqua: data.ketqua,
                        kqclient: data.ketqua,
                        dung: 1,
                        thoigian: Math.round((Math.abs(a - b) / 1000 - socket.thoigian) * 1000) / 1000
                    }
                    socket.thoigian = socket.thoigian + db.thoigian;
                    socket.diem = socket.diem + 1;
                    Database.push(db);
                }
                io.in(socket.room).emit('server-send-client-dung', { thutucauhoi: data.thutucauhoi, user: socket.username })
            } else {
                if (data.thutucauhoi === 1) {
                    const a = new Date(data.thoigian);
                    const c = ThoiGianBatDau.filter((item) => {
                        return item.room === socket.room
                    })
                    const b = new Date(c[0].thoigianbatdau);
                    const db = {
                        thutucauhoi: data.thutucauhoi,
                        name: socket.username,
                        room: socket.room,
                        cauhoi: data.cauhoi,
                        ketqua: result[0].ketqua,
                        kqclient: data.ketqua,
                        dung: 0,
                        thoigian: Math.round((Math.abs(a - b) / 1000) * 1000) / 1000
                    }
                    socket.thoigian = db.thoigian;
                    socket.diem = 0;
                    Database.push(db);
                } else {
                    let tongThoiGian = 0
                    const item = Database.filter((item) => {
                        return item.room === socket.room && item.name === socket.username
                    })
                    if (item.length === 1) {
                        tongThoiGian = item[0].thoigian;
                    } else {
                        tongThoiGian = item.reduce( // tổng thời gian hiện có
                            (previousValue, currentValue) => previousValue.thoigian + currentValue.thoigian, 0
                        );
                    }
                    const a = new Date(data.thoigian);
                    const c = ThoiGianBatDau.filter((item) => {
                        return item.room === socket.room
                    })
                    const b = new Date(c[0].thoigianbatdau);
                    const db = {
                        thutucauhoi: data.thutucauhoi,
                        name: socket.username,
                        room: socket.room,
                        cauhoi: data.cauhoi,
                        ketqua: result[0].ketqua,
                        kqclient: data.ketqua,
                        dung: 0,
                        thoigian: Math.round((Math.abs(a - b) / 1000 - socket.thoigian) * 1000) / 1000
                    }
                    socket.thoigian = socket.thoigian + db.thoigian;
                    Database.push(db);
                }
                io.in(socket.room).emit('server-send-client-sai', { thutucauhoi: data.thutucauhoi, user: socket.username })
            }
        }
        /////// bang thanh tich
        const temThongKe = ThongKe.filter(i => i.room === socket.room)
        if (temThongKe.length === 0) {
            let data = {
                name: socket.username,
                diem: socket.diem,
                tongthoigian: socket.thoigian,
                id: socket.id,
                room: socket.room
            }
            ThongKe.push(data);
        } else {
            let dung = true;
            for (let i = 0; i < ThongKe.length; i++) {
                if (ThongKe[i].name === socket.username && ThongKe[i].room === socket.room) {
                    let data = {
                        name: socket.username,
                        diem: socket.diem,
                        tongthoigian: socket.thoigian,
                        id: socket.id,
                        room: socket.room
                    }
                    dung = false
                    ThongKe[i] = data
                    break;
                }
            }
            if (dung) {
                let data = {
                    name: socket.username,
                    diem: socket.diem,
                    tongthoigian: socket.thoigian,
                    id: socket.id,
                    room: socket.room
                }
                ThongKe.push(data);
            }
        }

        const newThongKe = ThongKe.filter((i) => { return i.room === socket.room })
        newThongKe.sort((a, b) => b.diem - a.diem)
        newThongKe.sort((a, b) => { a.thoigian - b.thoigian })
        io.in(socket.room).emit('server-send-bangthanhtich', newThongKe)
        ////////

        const ArrCHvaKQ = CauHoivaKetQua.filter((item) => { return item.room === socket.room })
        const dataguidi = ArrCHvaKQ.filter((item) => { return item.thutucauhoi === data.thutucauhoi + 1 })
        socket.cauhoihientai = data.thutucauhoi + 1
        socket.emit('server-send-chvakq', dataguidi[0])


        if (socket.cauhoihientai === 11) {// khi đã trả lời hết 10 câu
            //bang xep hang
            // const data = {
            //     name: socket.username,
            //     diem: socket.diem,
            //     tongthoigian: socket.thoigian,
            //     id: socket.id,
            //     room: socket.room
            // }
            // ThongKe.push(data);
            DaLamXong10Cau.push(socket.username);
            console.log('DaLamXong10Cau', DaLamXong10Cau);
            let newThongKe = ThongKe.filter((i) => { return i.room === socket.room })
            newThongKe = newThongKe.filter(i => DaLamXong10Cau.includes(i.name))
            newThongKe.sort((a, b) => b.diem - a.diem)
            newThongKe.sort((a, b) => { a.thoigian - b.thoigian })
            newThongKe.map((item) => {
                io.in(item.id).emit('server-send-thongke', newThongKe)
            })
            // chi tiet
            const arr = Database.filter((item) => {
                return item.room === socket.room && item.name === socket.username
            })
            arr.sort((a, b) => a.thutucauhoi - b.thutucauhoi)
            socket.emit('server-send-thongke-chitiet', arr)
        }

        // kiểm tra xem tất cả user trong mảng đã làm xong hết chưa, nếu rồi thì hiện (Chơi Tiếp)
        const ThongKeMoi = ThongKe.filter((i) => { return i.room === socket.room })
        const xong10cau = ThongKeMoi.filter(i => DaLamXong10Cau.includes(i.name)) // list user đã làm xong 10 câu
        const hetgio = ThongKeMoi.filter((i) => { return i.tongthoigian === 60 }) // list user làm hết thời gian
        const allUser = []; // chứa [name]
        ThongKeMoi.map(i => {
            allUser.push(i.name);
        })
        const doneUser = [] // [name]
        xong10cau.map(i => {
            if (!doneUser.includes(i.name)) {
                doneUser.push(i.name)
            }
        })
        hetgio.map(i => {
            if (!doneUser.includes(i.name)) {
                doneUser.push(i.name)
            }
        })
        const areEqual = allUser.length === doneUser.length && allUser.every(item => doneUser.indexOf(item) > -1);
        if (areEqual) {
            ThongKeMoi.map(i => {
                io.in(i.id).emit('show-choi-tiep')
            })
        }
    })

    socket.on('client-xem-thongke', (name) => {
        const newThongKe = ThongKe.filter((i) => { return i.room === socket.room })
        newThongKe.sort((a, b) => b.diem - a.diem)
        newThongKe.sort((a, b) => { a.thoigian - b.thoigian })
        socket.emit('server-send-thongke', newThongKe)
        //chitiet
        const arr = Database.filter((item) => {
            return item.room === socket.room && item.name === name
        })
        arr.sort((a, b) => a.thutucauhoi - b.thutucauhoi)
        socket.emit('server-send-thongke-chitiet', arr)
    })

    socket.on('client-send-hetgio', () => {
        if (!DaLamXong10Cau.includes(socket.username)) {
            const temThongKe = ThongKe.filter(i => i.room === socket.room)
            if (temThongKe.length === 0) {
                let data = {
                    name: socket.username,
                    diem: socket.diem,
                    tongthoigian: 60,
                    id: socket.id,
                    room: socket.room
                }
                ThongKe.push(data);
            } else {
                let dung = true;
                for (let i = 0; i < ThongKe.length; i++) {
                    if (ThongKe[i].name === socket.username && ThongKe[i].room === socket.room) {
                        let data = {
                            name: socket.username,
                            diem: socket.diem,
                            tongthoigian: 60,
                            id: socket.id,
                            room: socket.room
                        }
                        dung = false
                        ThongKe[i] = data
                        break;
                    }
                }
                if (dung) {
                    let data = {
                        name: socket.username,
                        diem: socket.diem,
                        tongthoigian: 60,
                        id: socket.id,
                        room: socket.room
                    }
                    ThongKe.push(data);
                }
            }
        }
        // const mang = ThongKe.filter((i) => {
        //     return i.name === socket.username
        // })
        // console.log('mang', mang);
        // if (mang.length === 0) {
        //     const data = {
        //         name: socket.username,
        //         diem: socket.diem,
        //         tongthoigian: 60,
        //         id: socket.id,
        //         room: socket.room
        //     }
        //     ThongKe.push(data);
        // }
        const newThongKe = ThongKe.filter((i) => { return i.room === socket.room })
        newThongKe.sort((a, b) => b.diem - a.diem)
        newThongKe.sort((a, b) => { a.thoigian - b.thoigian })
        newThongKe.map((item) => {
            io.in(item.id).emit('server-send-thongke', newThongKe)
        })
        // chi tiet
        const arr = Database.filter((item) => {
            return item.room === socket.room && item.name === socket.username
        })
        arr.sort((a, b) => a.thutucauhoi - b.thutucauhoi)
        socket.emit('server-send-thongke-chitiet', arr)


        // kiểm tra xem tất cả user trong mảng đã làm xong hết chưa, nếu rồi thì hiện (Chơi Tiếp)
        const ThongKeMoi = ThongKe.filter((i) => { return i.room === socket.room })
        const xong10cau = ThongKeMoi.filter(i => DaLamXong10Cau.includes(i.name)) // list user đã làm xong 10 câu
        const hetgio = ThongKeMoi.filter((i) => { return i.tongthoigian === 60 }) // list user làm hết thời gian
        const allUser = []; // chứa [name]
        ThongKeMoi.map(i => {
            allUser.push(i.name);
        })
        const doneUser = [] // [name]
        xong10cau.map(i => {
            if (!doneUser.includes(i.name)) {
                doneUser.push(i.name)
            }
        })
        hetgio.map(i => {
            if (!doneUser.includes(i.name)) {
                doneUser.push(i.name)
            }
        })
        const areEqual = allUser.length === doneUser.length && allUser.every(item => doneUser.indexOf(item) > -1);
        if (areEqual) {
            ThongKeMoi.map(i => {
                io.in(i.id).emit('show-choi-tiep')
            })
        }
    })

    socket.on('client-send-chat', data => {
        io.in(socket.room).emit('server-send-chat', data);
    })

    socket.on('hack-chat', (name) => {
        io.in(socket.room).emit('hack-chat', name);
    })

    socket.on('disconnect', () => {
        const temThongKe = ThongKe.filter(i => i.room === socket.room)
        if (temThongKe.length === 0) {
            let data = {
                name: socket.username,
                diem: socket.diem,
                tongthoigian: socket.thoigian,
                id: socket.id,
                room: socket.room
            }
            ThongKe.push(data);
        } else {
            let dung = true;
            for (let i = 0; i < ThongKe.length; i++) {
                if (ThongKe[i].name === socket.username && ThongKe[i].room === socket.room) {
                    let data = {
                        name: socket.username,
                        diem: socket.diem,
                        tongthoigian: socket.thoigian,
                        id: socket.id,
                        room: socket.room
                    }
                    dung = false
                    ThongKe[i] = data
                    break;
                }
            }
            if (dung) {
                let data = {
                    name: socket.username,
                    diem: socket.diem,
                    tongthoigian: socket.thoigian,
                    id: socket.id,
                    room: socket.room
                }
                ThongKe.push(data);
            }
        }
        // const data = {
        //     name: socket.username,
        //     diem: socket.diem,
        //     tongthoigian: socket.thoigian,
        //     id: socket.id,
        //     room: socket.room
        // }
        // console.log(data);
        // ThongKe.push(data);

        console.log('user disconnect: ', socket.id);

        const arr = ListUserNameandRoom.filter((l) => {
            return l.room === socket.room
        })
        if (arr.length === 1) { // chỉ còn 1 đứa trong room, và đứa này đang out thì xóa dữ liệu liên quan
            ThongKe = ThongKe.filter((item) => {
                return item.room !== socket.room
            })
            ThoiGianBatDau = ThoiGianBatDau.filter((item) => {
                return item.room !== socket.room
            })
            Database = Database.filter((item) => {
                return item.room !== socket.room
            })
            CauHoivaKetQua = CauHoivaKetQua.filter((item) => {
                return item.room !== socket.room;
            })
            ListUserNameandRoom = ListUserNameandRoom.filter((item) => {
                return item.room !== socket.room;
            })
            ListUserName = ListUserName.filter((item) => {
                return item !== socket.username;
            })
            Room = Room.filter((item) => {
                return item !== socket.room;
            })
            //update phongchow-phongchoi
            const arrPhongChoi = []
            CauHoivaKetQua.map((i) => {
                if (!arrPhongChoi.includes(i.room)) {
                    arrPhongChoi.push(i.room);
                }
            })
            const arrPhongCho = Room.filter(r => !arrPhongChoi.includes(r));
            io.emit('phongcho-phongchoi', { phongcho: arrPhongCho, phongchoi: arrPhongChoi })
        }
        ListUserName = ListUserName.filter((item) => {
            return item !== socket.username;
        })
        ListUserNameandRoom = ListUserNameandRoom.filter((item) => {
            return item.name !== socket.username
        })
        io.in(socket.room).emit('user-out', socket.username)
    })
})


module.exports = SocketApi;