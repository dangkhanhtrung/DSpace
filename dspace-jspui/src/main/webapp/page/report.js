export default {
    fundings: {
        query: `q=resourcetype_group:fundings&rows=0&facet=true&facet.query=(crisproject.pjtype:Đề tài)&facet.query=(crisproject.pjtype:Đề án)&facet.query=(crisproject.pjtype:Dự án)&facet.query=(crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề án)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.pjtype:Dự án)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề án)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.pjtype:Dự án)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Quốc gia AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.level:Quốc gia AND crisproject.pjtype:Đề án)&facet.query=(crisproject.level:Quốc gia AND crisproject.pjtype:Dự án)&facet.query=(crisproject.level:Quốc gia AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề án)&facet.query=(crisproject.level:Bộ ngành AND crisproject.pjtype:Dự án)&facet.query=(crisproject.level:Bộ ngành AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề án)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.pjtype:Dự án)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Cơ sở AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.level:Cơ sở AND crisproject.pjtype:Đề án)&facet.query=(crisproject.level:Cơ sở AND crisproject.pjtype:Dự án)&facet.query=(crisproject.level:Cơ sở AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề tài)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề án)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Dự án)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề tài)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề án)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Dự án)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Hợp tác quốc tế)`,
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 3: NHIỆM VỤ KHOA HỌC CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Nhiệm vụ" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            120,
                            80,
                            80,
                            80,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại nhiệm vụ",
                                    colSpan: 4,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Đề tài",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Đề án",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Dự án",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Hợp tác quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "5",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia tình trạng",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Đang tiến hành",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đang tiến hành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Đã được nghiệm thu",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.status:Đã kết thúc AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Chia theo cấp quản lý",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Cấp quốc gia",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Quốc gia AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Cấp bộ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Bộ ngành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Cấp tỉnh",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Tỉnh thành AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Cấp cơ sở",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Cơ sở AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Ngoài ngân sách",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề tài)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề án)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Dự án)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "5. Chia theo lĩnh vực nghiên cứu",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề tài)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề án)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Dự án)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề tài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Đề án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Dự án)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.pjtype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],

                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    publications: {
        query: `q=resourcetype_authority:publications&rows=0&facet=true&facet.query=(dc.collection:Scopus)&facet.query=(dc.collection:ISI)&facet.query=(dc.collection:Quốc tế)&facet.query=(dc.collection:Trong nước)&facet.query=(dc.type:(Báo NOT nhiệm) AND dc.collection:Scopus)&facet.query=(dc.type:(Báo NOT nhiệm) AND dc.collection:ISI)&facet.query=(dc.type:(Báo NOT nhiệm) AND dc.collection:Quốc tế)&facet.query=(dc.type:(Báo NOT nhiệm) AND dc.collection:Trong nước)&facet.query=(dc.type:hội thảo AND dc.collection:Scopus)&facet.query=(dc.type:hội thảo AND dc.collection:ISI)&facet.query=(dc.type:hội thảo AND dc.collection:Quốc tế)&facet.query=(dc.type:hội thảo AND dc.collection:Trong nước)&facet.query=(dc.type:nhiệm vụ AND dc.collection:Scopus)&facet.query=(dc.type:nhiệm vụ AND dc.collection:ISI)&facet.query=(dc.type:nhiệm vụ AND dc.collection:Quốc tế)&facet.query=(dc.type:nhiệm vụ AND dc.collection:Trong nước)&facet.query=(dc.type:(Sách NOT trích) AND dc.collection:Scopus)&facet.query=(dc.type:(Sách NOT trích) AND dc.collection:ISI)&facet.query=(dc.type:(Sách NOT trích) AND dc.collection:Quốc tế)&facet.query=(dc.type:(Sách NOT trích) AND dc.collection:Trong nước)&facet.query=(dc.type:tiến sĩ AND dc.collection:Scopus)&facet.query=(dc.type:tiến sĩ AND dc.collection:ISI)&facet.query=(dc.type:tiến sĩ AND dc.collection:Quốc tế)&facet.query=(dc.type:tiến sĩ AND dc.collection:Trong nước)&facet.query=(dc.type:thạc sĩ AND dc.collection:Scopus)&facet.query=(dc.type:thạc sĩ AND dc.collection:ISI)&facet.query=(dc.type:thạc sĩ AND dc.collection:Quốc tế)&facet.query=(dc.type:thạc sĩ AND dc.collection:Trong nước)&facet.query=(dc.type:tạp chí AND dc.collection:Scopus)&facet.query=(dc.type:tạp chí AND dc.collection:ISI)&facet.query=(dc.type:tạp chí AND dc.collection:Quốc tế)&facet.query=(dc.type:tạp chí AND dc.collection:Trong nước)&facet.query=(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Scopus)&facet.query=(dc.type:(kỷ yếu NOT thảo) AND dc.collection:ISI)&facet.query=(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Quốc tế)&facet.query=(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Trong nước)&facet.query=(dc.type:Bài trích sách AND dc.collection:Scopus)&facet.query=(dc.type:Bài trích sách AND dc.collection:ISI)&facet.query=(dc.type:Bài trích sách AND dc.collection:Quốc tế)&facet.query=(dc.type:Bài trích sách AND dc.collection:Trong nước)&facet.query=(dc.type:nghiên cứu AND dc.collection:Scopus)&facet.query=(dc.type:nghiên cứu AND dc.collection:ISI)&facet.query=(dc.type:nghiên cứu AND dc.collection:Quốc tế)&facet.query=(dc.type:nghiên cứu AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Trong nước)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Scopus)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:ISI)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Quốc tế)&facet.query=(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Trong nước)`,
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 4: CÔNG BỐ KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Công bố" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            120,
                            80,
                            80,
                            80,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Bộ sưu tập",
                                    colSpan: 4,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Scopus",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "ISI",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Trong nước",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "5",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(dc.collection:Scopus)\"] + dataX[\"(dc.collection:ISI)\"] + dataX[\"(dc.collection:Quốc tế)\"] + dataX[\"(dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo Loại công bố",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Bài báo",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Scopus)\"] + dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:ISI)\"] + dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Báo NOT nhiệm) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Kỷ yếu hội thảo",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:hội thảo AND dc.collection:Scopus)\"] + dataX[\"(dc.type:hội thảo AND dc.collection:ISI)\"] + dataX[\"(dc.type:hội thảo AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:hội thảo AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:hội thảo AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:hội thảo AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:hội thảo AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:hội thảo AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Báo cáo kết quả nhiệm vụ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:nhiệm vụ AND dc.collection:Scopus)\"] + dataX[\"(dc.type:nhiệm vụ AND dc.collection:ISI)\"] + dataX[\"(dc.type:nhiệm vụ AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:nhiệm vụ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nhiệm vụ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nhiệm vụ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nhiệm vụ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nhiệm vụ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Sách",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Scopus)\"] + dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:ISI)\"] + dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(Sách NOT trích) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Luận án tiến sĩ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:tiến sĩ AND dc.collection:Scopus)\"] + dataX[\"(dc.type:tiến sĩ AND dc.collection:ISI)\"] + dataX[\"(dc.type:tiến sĩ AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:tiến sĩ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tiến sĩ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tiến sĩ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tiến sĩ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tiến sĩ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Luận án thạc sĩ ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:thạc sĩ AND dc.collection:Scopus)\"] + dataX[\"(dc.type:thạc sĩ AND dc.collection:ISI)\"] + dataX[\"(dc.type:thạc sĩ AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:thạc sĩ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:thạc sĩ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:thạc sĩ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:thạc sĩ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:thạc sĩ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Bài trích tạp chí",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:tạp chí AND dc.collection:Scopus)\"] + dataX[\"(dc.type:tạp chí AND dc.collection:ISI)\"] + dataX[\"(dc.type:tạp chí AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:tạp chí AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tạp chí AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tạp chí AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tạp chí AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:tạp chí AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Bài trích kỷ yếu",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Scopus)\"] + dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:ISI)\"] + dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:(kỷ yếu NOT thảo) AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Bài trích sách",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:Bài trích sách AND dc.collection:Scopus)\"] + dataX[\"(dc.type:Bài trích sách AND dc.collection:ISI)\"] + dataX[\"(dc.type:Bài trích sách AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:Bài trích sách AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:Bài trích sách AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:Bài trích sách AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:Bài trích sách AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:Bài trích sách AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Bài nghiên cứu",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(dc.type:nghiên cứu AND dc.collection:Scopus)\"] + dataX[\"(dc.type:nghiên cứu AND dc.collection:ISI)\"] + dataX[\"(dc.type:nghiên cứu AND dc.collection:Quốc tế)\"] + dataX[\"(dc.type:nghiên cứu AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nghiên cứu AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nghiên cứu AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nghiên cứu AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(dc.type:nghiên cứu AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::1.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::2.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::3.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::4.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::5.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Scopus)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:ISI)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Quốc tế)\"] + dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Scopus)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:ISI)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(domain_keyword:/BẢNG PHÂN LOẠI LĨNH VỰC NGHIÊN CỨU KHOA HỌC VÀ CÔNG NGHỆ::6.*/ AND dc.collection:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ]

                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crispatents: {
        query: `q=resourcetype_group:crispatents&rows=0&facet=true&facet.query=(crispatents.patentstype:Sáng chế)&facet.query=(crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Sáng chế)&facet.query=(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Sáng chế)&facet.query=(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/A.*/)&facet.query=(patentssubject_keyword:/A.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/A.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/B.*/)&facet.query=(patentssubject_keyword:/B.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/B.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/C.*/)&facet.query=(patentssubject_keyword:/C.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/C.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/D.*/)&facet.query=(patentssubject_keyword:/D.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/D.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/E.*/)&facet.query=(patentssubject_keyword:/E.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/E.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/F.*/)&facet.query=(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/G.*/)&facet.query=(patentssubject_keyword:/G.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/G.*/ AND crispatents.patentstype:Giải pháp hữu ích)&facet.query=(patentssubject_keyword:/F.*/)&facet.query=(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Sáng chế)&facet.query=(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Giải pháp hữu ích)`,
        querys: [
            'q=(resourcetype_group:crispatents)&rows=0&facet=true&facet.pivot=crispatents.patentscountrycode',
            'q=(resourcetype_group:crispatents AND crispatents.patentstype:Sáng chế)&rows=0&facet=true&facet.pivot=crispatents.patentscountrycode',
            'q=(resourcetype_group:crispatents AND crispatents.patentstype:Giải pháp hữu ích)&rows=0&facet=true&facet.pivot=crispatents.patentscountrycode',
        ],
        dataPoint: {
            "17": "crispatents.patentscountrycode"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 5: SÁNG CHẾ KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Sáng chế" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            120,
                            80,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại bằng",
                                    colSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Sáng chế",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải pháp hữu ích",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crispatents.patentstype:Sáng chế)\"] + dataX[\"(crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo Tình trạng hiệu lực",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Còn hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Sáng chế)\"] + dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Hết hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Sáng chế)\"] + dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Phân loại IPC",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Phần A",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/A.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/A.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/A.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần B",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/B.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/B.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/B.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần C",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/C.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/C.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/C.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần D",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/D.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/D.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/D.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần E",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/E.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/E.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/E.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần F",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần G",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/G.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/G.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/G.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phần F",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Sáng chế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(patentssubject_keyword:/F.*/ AND crispatents.patentstype:Giải pháp hữu ích)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Chia theo quốc gia công nhận",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                ""
                            ],

                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    criscertificate: {
        query: `q=resourcetype_group:criscertificate&rows=0&facet=true&facet.query=(criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Cá nhân)&facet.query=(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Tổ chức)&facet.query=(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Cá nhân)`,
        querys: [
            'q=(resourcetype_group:criscertificate)&rows=0&facet=true&facet.pivot=certificateissuedate.year_sort',
            'q=(resourcetype_group:criscertificate AND criscertificate.certificatetype:Tổ chức)&rows=0&facet=true&facet.pivot=certificateissuedate.year_sort',
            'q=(resourcetype_group:criscertificate AND criscertificate.certificatetype:Cá nhân)&rows=0&facet=true&facet.pivot=certificateissuedate.year_sort'
        ],
        dataPoint: {
            "15": "certificateissuedate.year_sort"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 13: GIẤY CHỨNG NHẬN CỦA TỔ CHỨC/CÁ NHÂN\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Giấy chứng nhận" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            120,
                            80,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại giấy chứng nhận",
                                    colSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Tổ chức",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Cá nhân",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo Lĩnh vực cấp chứng nhận",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Giám định sở hữu trí tuệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Giám định sở hữu trí tuệ) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Đại diện sở hữu công nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đại diện sở hữu công nghiệp) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Đánh giá sự phù hợp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Đánh giá sự phù hợp) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Kiểm định chất lượng, chuẩn đo lường",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Kiểm định chất lượng, chuẩn đo lường) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Hoạt động công nghệ cao",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động công nghệ cao NOT khoa) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Hoạt động khoa học công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatesubject:(Hoạt động khoa học công nghệ NOT cao) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo tình trạng",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Còn hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Còn) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Hết hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Tổ chức)\"] + dataX[\"(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Tổ chức)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(criscertificate.certificatestatus:(Hết) AND criscertificate.certificatetype:Cá nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Chia theo năm cấp",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                ""
                            ],

                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crisstandards: {
        query: `q=resourcetype_group:crisstandards&rows=0&facet=true&facet.query=(standardstype:TCVN)&facet.query=(standardstype:TCCS)&facet.query=(standardstype:QCVN)&facet.query=(standardstype:QCĐP)&facet.query=(standardstype:ĐLVN)&facet.query=(standardstype:Quốc tế)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:TCVN)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:TCCS)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:QCVN)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:QCĐP)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:ĐLVN)&facet.query=(standardsstatus:Còn hiệu lực AND standardstype:Quốc tế)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:TCVN)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:TCCS)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:QCVN)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:QCĐP)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:ĐLVN)&facet.query=(standardsstatus:Hết hiệu lực AND standardstype:Quốc tế)`,
        querys: [
            'q=(resourcetype_group:crisstandards)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:TCVN)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:TCCS)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:QCVN)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:QCĐP)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:ĐLVN)&rows=0&facet=true&facet.pivot=standardssubject_authority',
            'q=(resourcetype_group:crisstandards AND standardstype:Quốc tế)&rows=0&facet=true&facet.pivot=standardssubject_authority'
        ],
        dataPoint: {
            "8": "standardssubject_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 6:  DỮ LIỆU TIÊU CHUẨN \n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Tiêu chuẩn" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            50,
                            50,
                            50,
                            50,
                            50,
                            50
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại Tiêu chuẩn",
                                    colSpan: 6,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "TCVN",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "TCCS",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "QCVN",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "QCĐP",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "ĐLVN",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "5",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "6",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "7",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(standardstype:TCVN)\"] + dataX[\"(standardstype:TCCS)\"] + dataX[\"(standardstype:QCVN)\"] + dataX[\"(standardstype:QCĐP)\"] + dataX[\"(standardstype:ĐLVN)\"] + dataX[\"(standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:TCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:TCCS)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:QCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:QCĐP)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:ĐLVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo Loại công bố",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Còn hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCCS)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCĐP)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:ĐLVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCCS)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCĐP)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:ĐLVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Hết hiệu lực",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCCS)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCĐP)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:ĐLVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCCS)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCĐP)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:ĐLVN)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo Khung phân loại",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    cristechs: {
        query: `q=resourcetype_group:cristechs&rows=0&facet=true&facet.query=(techstype:Công nghệ, thiết bị)&facet.query=(techstype:Giải pháp phần mềm)&facet.query=(techstype:Dịch vụ)&facet.query=(cristechs.techscollection:Nguồn cung AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techscollection:Nguồn cung AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techscollection:Nguồn cung AND techstype:Dịch vụ)&facet.query=(cristechs.techscollection:Nguồn cầu AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techscollection:Nguồn cầu AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techscollection:Nguồn cầu AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:1 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:1 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:1 AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:2 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:2 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:2 AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:3 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:3 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:3 AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:4 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:4 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:4 AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:5 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:5 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:5 AND techstype:Dịch vụ)&facet.query=(cristechs.techssubject:6 AND techstype:Công nghệ, thiết bị)&facet.query=(cristechs.techssubject:6 AND techstype:Giải pháp phần mềm)&facet.query=(cristechs.techssubject:6 AND techstype:Dịch vụ)`,
        querys: [
            'q=(resourcetype_group:cristechs)&rows=0&facet=true&facet.pivot=techscountry_authority',
            'q=(resourcetype_group:cristechs AND techstype:Công nghệ, thiết bị)&rows=0&facet=true&facet.pivot=techscountry_authority',
            'q=(resourcetype_group:cristechs AND techstype:Giải pháp phần mềm)&rows=0&facet=true&facet.pivot=techscountry_authority',
            'q=(resourcetype_group:cristechs AND techstype:Dịch vụ)&rows=0&facet=true&facet.pivot=techscountry_authority'
        ],
        dataPoint: {
            "15": "techscountry_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 7: CUNG CẦU CÔNG NGHỆ  \n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Công nghệ" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            50,
                            50,
                            50
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại công nghệ",
                                    colSpan: 3,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Công nghệ thiết bị",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải pháp phần mềm",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Dịch vụ",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(techstype:Công nghệ, thiết bị)\"] + dataX[\"(techstype:Giải pháp phần mềm)\"] + dataX[\"(techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo cung cầu",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Nguồn cung",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Nguồn cầu",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:1 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:1 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:1 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:1 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:1 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:1 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:2 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:2 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:2 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:2 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:2 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:2 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:3 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:3 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:3 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:3 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:3 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:3 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:4 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:4 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:4 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:4 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:4 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:4 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:5 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:5 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:5 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:5 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:5 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:5 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:6 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:6 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:6 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:6 AND techstype:Công nghệ, thiết bị)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:6 AND techstype:Giải pháp phần mềm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(cristechs.techssubject:6 AND techstype:Dịch vụ)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Chia theo quốc gia phát triển",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crisawards: {
        query: `q=resourcetype_group:crisawards&rows=0&facet=true&facet.query=(crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&facet.query=(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&facet.query=(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)&facet.query=(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&facet.query=(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&facet.query=(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)`,
        querys: [
            'q=(resourcetype_group:crisawards)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority',
            'q=(resourcetype_group:crisawards AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority',
            'q=(resourcetype_group:crisawards AND crisawards.awardstype:Giải thưởng Nhà nước)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority',
            'q=(resourcetype_group:crisawards AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority',
            'q=(resourcetype_group:crisawards AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority',
            'q=(resourcetype_group:crisawards AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)&rows=0&facet=true&facet.pivot=AwardsAuthority_authority'
        ],
        dataPoint: {
            "12": "AwardsAuthority_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 8: GIẢI THƯỞNG KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Giải thưởng" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            50,
                            50,
                            50,
                            50,
                            50
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại giải thưởng",
                                    colSpan: 5,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Giải thưởng Hồ Chí Minh",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải thưởng Nhà nước",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải thưởng của Bộ, ngành, địa phương",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải thưởng của tổ chức trong nước",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giải thưởng của tổ chức quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "5",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "6",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo đơn vị chủ quản",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crisevents: {
        query: `q=resourcetype_group:crisevents&rows=0&facet=true&facet.query=(crisevents.eventstype:Kỷ yếu)&facet.query=(crisevents.eventstype:Hội thảo)&facet.query=(crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Toạ đàm)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Kỷ yếu)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Toạ đàm)`,
        querys: [
            'q=(resourcetype_group:crisevents)&rows=0&facet=true&facet.pivot=eventsprovince_authority',
            'q=(resourcetype_group:crisevents AND eventstype_authority:/Kỷ yếu/)&rows=0&facet=true&facet.pivot=eventsprovince_authority',
            'q=(resourcetype_group:crisevents AND eventstype_authority:/Hội thảo/)&rows=0&facet=true&facet.pivot=eventsprovince_authority',
            'q=(resourcetype_group:crisevents AND eventstype_authority:/Toạ đàm/)&rows=0&facet=true&facet.pivot=eventsprovince_authority'
        ],
        dataPoint: {
            "12": "eventsprovince_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 9: SỰ KIỆN KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Sự kiện" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            50,
                            50,
                            50
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại sự kiện",
                                    colSpan: 3,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Kỷ yếu",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Hội thảo",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Toạ đàm",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(crisevents.eventstype:Hội thảo)\"] + dataX[\"(crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Kỷ yếu)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Kỷ yếu)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Toạ đàm)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Tỉnh thành tổ chức sự kiện",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crisfundings: {
        query: `q=resourcetype_group:crisfundings&rows=0&facet=true&facet.query=(crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/1.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/1.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/1.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/2.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/2.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/2.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/3.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/3.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/3.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/4.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/4.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/4.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/5.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/5.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/5.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingssubject:/6.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingssubject:/6.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingssubject:/6.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Hợp tác quốc tế)&facet.query=(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Nghiên cứu phát triển)&facet.query=(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Phát triển tiềm lực)&facet.query=(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Hợp tác quốc tế)`,
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 11: TÀI TRỢ  KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Tài trợ" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            50,
                            50,
                            50
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại tài trợ",
                                    colSpan: 3,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Nghiên cứu phát triển",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Phát triển tiềm lực",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Hợp tác quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo tình trạng",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Đang gọi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Đã kết thúc",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    crisjournals: {
        query: `q=resourcetype_group:crisjournals&rows=0&facet=true&facet.query=(crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Quốc tế)&facet.query=(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Trong nước)&facet.query=(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Quốc tế)`,
        querys: [
            'q=(resourcetype_group:crisjournals)&rows=0&facet=true&facet.pivot=journalsauthority_authority',
            'q=(resourcetype_group:crisjournals AND crisjournals.journalstype:Trong nước)&rows=0&facet=true&facet.pivot=journalsauthority_authority',
            'q=(resourcetype_group:crisjournals AND crisjournals.journalstype:Quốc tế)&rows=0&facet=true&facet.pivot=journalsauthority_authority'
        ],
        dataPoint: {
            "5": "journalsauthority_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 10: TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Tạp chí" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            120,
                            100,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Loại tạp chí",
                                    colSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Trong nước",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Quốc tế",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Chia theo đơn vị chủ quản",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "", "", "", "",
                            ],
                            [{
                                    text: "3. Chia theo lĩnh vực KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Trong nước)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ]
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    orgunits: {
        query: `q=resourcetype_group:orgunits&rows=0&facet=true&facet.query=(crisou.outype:(Công lập NOT Ngoài))&facet.query=(crisou.outype:Ngoài công lập)&facet.query=(crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/1.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/1.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/2.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/2.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/3.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/3.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/4.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/4.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/4.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/5.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/5.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/5.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/6.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(OUSubject_keyword:/6.*/ AND crisou.outype:Ngoài công lập)&facet.query=(OUSubject_keyword:/6.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(crisou.activity:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(crisou.activity:/1.*/ AND crisou.outype:Ngoài công lập)&facet.query=(crisou.activity:/1.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(crisou.activity:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(crisou.activity:/2.*/ AND crisou.outype:Ngoài công lập)&facet.query=(crisou.activity:/2.*/ AND crisou.outype:Vốn nước ngoài)&facet.query=(crisou.activity:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))&facet.query=(crisou.activity:/3.*/ AND crisou.outype:Ngoài công lập)&facet.query=(crisou.activity:/3.*/ AND crisou.outype:Vốn nước ngoài)`,
        querys: [
            'q=(resourcetype_group:orgunits)&rows=0&facet=true&facet.pivot=OUProvince_authority',
            'q=(resourcetype_group:orgunits AND crisou.outype:(Công lập NOT Ngoài))&rows=0&facet=true&facet.pivot=OUProvince_authority',
            'q=(resourcetype_group:orgunits AND crisou.outype:Ngoài công lập)&rows=0&facet=true&facet.pivot=OUProvince_authority',
            'q=(resourcetype_group:orgunits AND crisou.outype:Vốn nước ngoài)&rows=0&facet=true&facet.pivot=OUProvince_authority'
        ],
        dataPoint: {
            "16": "OUProvince_authority"
        },
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 2: SỐ TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Tổ chức" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            100,
                            100,
                            100,
                            100
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Chia theo loại hình kinh tế",
                                    colSpan: 3,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Công lập",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Ngoài công lập",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Vốn nước ngoài",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"(crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(crisou.outype:Ngoài công lập)\"] + dataX[\"(crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2.Chia theo loại hình hoạt động",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Nghiên cứu khoa học",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(crisou.activity:/1.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(crisou.activity:/1.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/1.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/1.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Phát triển công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(crisou.activity:/2.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(crisou.activity:/2.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/2.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/2.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Dịch vụ khoa học và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(crisou.activity:/3.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(crisou.activity:/3.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/3.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisou.activity:/3.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo Lĩnh vực chuyên môn KHCN",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/1.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/2.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/3.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/4.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/5.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:(Công lập NOT Ngoài))\"] + dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:(Công lập NOT Ngoài))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:Ngoài công lập)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(OUSubject_keyword:/6.*/ AND crisou.outype:Vốn nước ngoài)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Tỉnh thành",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    },

    researcherprofiles: {
        queryfunc: true,
        query: `q=resourcetype_group:researcherprofiles&rows=0&facet=true&facet.query=(crisrp.degree:Tiến sĩ)&facet.query=(crisrp.degree:Thạc sĩ)&facet.query=(crisrp.degree:Kỹ sư)&facet.query=(crisrp.degree:Cử nhân)&facet.query=-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân)&facet.query=(crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.position:Phó giáo sư)&facet.query=(crisrp.position:/*Nghiên cứu*/)&facet.query=-(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/1.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/1.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/1.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/2.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/2.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/2.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/3.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/3.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/3.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/4.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/4.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/4.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/5.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/5.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/5.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpsubject:/6.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpsubject:/6.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpsubject:/6.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.rpcountry:VN AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.rpcountry:VN AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.rpcountry:VN AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.rpcountry:VN AND crisrp.degree:Cử nhân)&facet.query=(crisrp.rpcountry:VN AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.rpcountry:VN AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.rpcountry:VN AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.rpcountry:VN AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.rpcountry:VN AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.degree:Tiến sĩ)&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.degree:Thạc sĩ)&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.degree:Kỹ sư)&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.degree:Cử nhân)&facet.query=(-(crisrp.rpcountry:VN) AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.position:Phó giáo sư)&facet.query=(-(crisrp.rpcountry:VN) AND crisrp.position:/*Nghiên cứu*/)&facet.query=(-(crisrp.rpcountry:VN) AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=*&facet.query=crisrp.rpcountry:VN&facet.query=-crisrp.rpcountry:VN&facet.query=crisrp.rpsubject:/1.*/&facet.query=crisrp.rpsubject:/2.*/&facet.query=crisrp.rpsubject:/3.*/&facet.query=crisrp.rpsubject:/4.*/&facet.query=crisrp.rpsubject:/5.*/&facet.query=crisrp.rpsubject:/6.*/&facet.query=crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `]&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Nam)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Nam AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Nam AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.gender:Nam AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Nam AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Nam AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Nữ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Nữ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Nữ AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.gender:Nữ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Nữ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Nữ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Không xác định)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Không xác định AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Không xác định AND crisrp.position:(Giáo sư NOT Phó))&facet.query=(crisrp.gender:Không xác định AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Không xác định AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Không xác định AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))`,
        pdf: {
            pageOrientation: "landscape",
            content: [{
                    text: [{
                            text: "Bảng 1: NHÂN LỰC KHOA HỌC VÀ CÔNG NGHỆ\n(Số người làm việc trong ngành khoa hoc và công nghệ)\n",
                            fontSize: 14,
                            alignment: "center",
                            bold: true
                        },
                        {
                            text: "Đơn vị tính: Người" + "\n",
                            fontSize: 11,
                            alignment: "right"
                        }
                    ],
                    margin: [
                        0,
                        20
                    ],
                    style: "headerTitle"
                },
                {
                    style: "tableExample",
                    table: {
                        widths: [
                            "*",
                            60,
                            40,
                            40,
                            40,
                            40,
                            40,
                            40,
                            40,
                            40,
                            40
                        ],
                        headerRows: 2,
                        body: [
                            [{
                                    text: "",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "\nTổng số",
                                    rowSpan: 2,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                {
                                    text: "Chia theo trình độ học vấn",
                                    colSpan: 5,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                "",
                                "",
                                {
                                    text: "Chia theo chức danh, học hàm",
                                    colSpan: 4,
                                    alignment: "center",
                                    bold: true,
                                    style: "tdStyle"
                                },
                                "",
                                "",
                                ""
                            ],
                            [
                                "",
                                "",
                                {
                                    text: "Tiến sĩ",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Thạc sĩ",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Kỹ sư",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Cử nhân",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Khác",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Giáo sư",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Phó giáo sư",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Nghiên cứu",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "Khác",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "A",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "1",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "2",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "3",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "4",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "5",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "6",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "7",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "8",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "9",
                                    alignment: "center",
                                    style: "tdStyle"
                                },
                                {
                                    text: "10",
                                    alignment: "center",
                                    style: "tdStyle"
                                }
                            ],
                            [{
                                    text: "1. Tổng số",
                                    alignment: "left",
                                    bold: true
                                },
                                {
                                    text: "dataX[\"*\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"-(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "2. Giới tính",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Nam",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nam AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Nữ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Nữ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Không xác định",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.gender:Không xác định AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "3. Chia theo quốc tịch",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Việt Nam",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpcountry:VN\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpcountry:VN AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Nước ngoài",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"-crisrp.rpcountry:VN\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(-(crisrp.rpcountry:VN) AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "4. Chia theo lĩnh vực chuyên môn",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Khoa học tự nhiên",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/1.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/1.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học kỹ thuật và công nghệ",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/2.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/2.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học y, dược",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/3.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/3.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nông nghiệp",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/4.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/4.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học xã hội",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/5.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/5.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Khoa học nhân văn",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.rpsubject:/6.*/\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.rpsubject:/6.*/ AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "5. Chia theo độ tuổi",
                                    alignment: "left",
                                    bold: true
                                },
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [{
                                    text: "- Đến 35 tuổi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "]\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Từ 36-55 tuổi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "]\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Từ 56-60 tuổi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "]\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Từ 61-65 tuổi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "]\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ],
                            [{
                                    text: "- Trên 65 tuổi",
                                    alignment: "left",
                                    margin: [
                                        15,
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    text: "dataX[\"crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "]\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Tiến sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Thạc sĩ)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Kỹ sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Cử nhân)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:(Giáo sư NOT Phó))\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:Phó giáo sư)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                                    type: "function",
                                    alignment: "center"
                                },
                                {
                                    text: "dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND -(crisrp.position:(Giáo sư NOT Phó)) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                                    type: "function",
                                    alignment: "center"
                                }
                            ]
                        ]
                    },
                    margin: [
                        0,
                        0,
                        0,
                        5
                    ]
                }
            ]
        }
    }
}