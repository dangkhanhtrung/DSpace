export default {
   fundings: {
       query: `q=resourcetype_group:fundings&rows=0&facet=true&facet.query=(crisproject.type:Đề tài)&facet.query=(crisproject.type:Đề án)&facet.query=(crisproject.type:Dự án)&facet.query=(crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.type:Đề tài)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.type:Đề án)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.type:Dự án)&facet.query=(crisproject.status:Đang tiến hành AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.type:Đề tài)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.type:Đề án)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.type:Dự án)&facet.query=(crisproject.status:Đã kết thúc AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.level:Quốc gia AND crisproject.type:Đề tài)&facet.query=(crisproject.level:Quốc gia AND crisproject.type:Đề án)&facet.query=(crisproject.level:Quốc gia AND crisproject.type:Dự án)&facet.query=(crisproject.level:Quốc gia AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.level:Bộ ngành AND crisproject.type:Đề tài)&facet.query=(crisproject.level:Bộ ngành AND crisproject.type:Đề án)&facet.query=(crisproject.level:Bộ ngành AND crisproject.type:Dự án)&facet.query=(crisproject.level:Bộ ngành AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.type:Đề tài)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.type:Đề án)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.type:Dự án)&facet.query=(crisproject.level:Tỉnh thành AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.level:Cơ sở AND crisproject.type:Đề tài)&facet.query=(crisproject.level:Cơ sở AND crisproject.type:Đề án)&facet.query=(crisproject.level:Cơ sở AND crisproject.type:Dự án)&facet.query=(crisproject.level:Cơ sở AND crisproject.type:Hợp tác quốc tế)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề tài)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề án)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.type:Dự án)&facet.query=(crisproject.level:Ngoài ngân sách AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/1.*/ AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/2.*/ AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/3.*/ AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/4.*/ AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/5.*/ AND crisproject.type:Hợp tác quốc tế)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.type:Đề tài)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.type:Đề án)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.type:Dự án)&facet.query=(PJSubject_keyword:/6.*/ AND crisproject.type:Hợp tác quốc tế)`,
       pdf: {  
           pageOrientation:"landscape",
           content:[  
              {  
                 text:[  
                    {  
                       text:"Bảng 3: NHIỆM VỤ KHOA HỌC CÔNG NGHỆ\n",
                       fontSize:14,
                       alignment:"center",
                       bold:true
                    },
                    {  
                       text:"Đơn vị tính: Nhiệm vụ"               + "\n",
                       fontSize:11,
                       alignment:"right"
                    }
                 ],
                 margin:[  
                    0,
                    20
                 ],
                 style:"headerTitle"
              },
              {  
                 style:"tableExample",
                 table:{  
                    widths:[  
                       "*",
                       120,
                       80,
                       80,
                       80,
                       100
                    ],
                    headerRows:2,
                    body:[  
                       [  
                          {  
                             text:"",
                             rowSpan:2,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          {  
                             text:"\nTổng số",
                             rowSpan:2,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          {  
                             text:"Loại nhiệm vụ",
                             colSpan:4,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          "",
                          "",
                          ""
                       ],
                       [  
                          "",
                          "",
                          {  
                             text:"Đề tài",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Đề án",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Dự án",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Hợp tác quốc tế",
                             alignment:"center",
                             style:"tdStyle"
                          }
                       ],
                       [  
                          {  
                             text:"A",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"1",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"2",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"3",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"4",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"5",
                             alignment:"center",
                             style:"tdStyle"
                          }
                       ],
                       [  
                          {  
                             text:"1. Tổng số",
                             alignment:"left",
                             bold:true
                          },
                          {  
                             text:"dataX[\"(crisproject.type:Đề tài)\"] + dataX[\"(crisproject.type:Đề án)\"] + dataX[\"(crisproject.type:Dự án)\"] + dataX[\"(crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"2. Chia tình trạng",
                             alignment:"left",
                             bold:true
                          },
                          "",
                          "",
                          "",
                          "",
                          ""
                       ],
                       [  
                          {  
                             text:"- Đang tiến hành",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đang tiến hành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Đã được nghiệm thu",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.status:Đã kết thúc AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"4. Chia theo cấp quản lý",
                             alignment:"left",
                             bold:true
                          },
                          "",
                          "",
                          "",
                          "",
                          ""
                       ],
                       [  
                          {  
                             text:"- Cấp quốc gia",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Quốc gia AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Cấp bộ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Bộ ngành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Cấp tỉnh",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Tỉnh thành AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Cấp cơ sở",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Cơ sở AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Ngoài ngân sách",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề tài)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề án)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Dự án)\"] + dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(crisproject.level:Ngoài ngân sách AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"5. Chia theo lĩnh vực nghiên cứu",
                             alignment:"left",
                             bold:true
                          },
                          "",
                          "",
                          "",
                          "",
                          ""
                       ],
                       [  
                          {  
                             text:"- Khoa học tự nhiên",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học kỹ thuật và công nghệ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học y, dược",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học nông nghiệp",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học xã hội",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học nhân văn",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Đề tài)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Đề án)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Dự án)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Đề tài)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Đề án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Dự án)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND crisproject.type:Hợp tác quốc tế)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
        
                    ]
                 },
                 margin:[  
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
       query: `q=resourcetype_authority:collections&rows=0&facet=true&facet.query=(search.resourcetype:3)&facet.query=(search.resourcetype:4)&facet.query=(search.resourcetype:5)&facet.query=(search.resourcetype:6)&facet.query=(dc.type:1 AND search.resourcetype:3)&facet.query=(dc.type:1 AND search.resourcetype:4)&facet.query=(dc.type:1 AND search.resourcetype:5)&facet.query=(dc.type:1 AND search.resourcetype:6)&facet.query=(dc.type:2 AND search.resourcetype:3)&facet.query=(dc.type:2 AND search.resourcetype:4)&facet.query=(dc.type:2 AND search.resourcetype:5)&facet.query=(dc.type:2 AND search.resourcetype:6)&facet.query=(dc.type:3 AND search.resourcetype:3)&facet.query=(dc.type:3 AND search.resourcetype:4)&facet.query=(dc.type:3 AND search.resourcetype:5)&facet.query=(dc.type:3 AND search.resourcetype:6)&facet.query=(dc.type:4 AND search.resourcetype:3)&facet.query=(dc.type:4 AND search.resourcetype:4)&facet.query=(dc.type:4 AND search.resourcetype:5)&facet.query=(dc.type:4 AND search.resourcetype:6)&facet.query=(dc.type:5 AND search.resourcetype:3)&facet.query=(dc.type:5 AND search.resourcetype:4)&facet.query=(dc.type:5 AND search.resourcetype:5)&facet.query=(dc.type:5 AND search.resourcetype:6)&facet.query=(dc.type:6 AND search.resourcetype:3)&facet.query=(dc.type:6 AND search.resourcetype:4)&facet.query=(dc.type:6 AND search.resourcetype:5)&facet.query=(dc.type:6 AND search.resourcetype:6)&facet.query=(dc.type:7 AND search.resourcetype:3)&facet.query=(dc.type:7 AND search.resourcetype:4)&facet.query=(dc.type:7 AND search.resourcetype:5)&facet.query=(dc.type:7 AND search.resourcetype:6)&facet.query=(dc.type:8 AND search.resourcetype:3)&facet.query=(dc.type:8 AND search.resourcetype:4)&facet.query=(dc.type:8 AND search.resourcetype:5)&facet.query=(dc.type:8 AND search.resourcetype:6)&facet.query=(dc.type:9 AND search.resourcetype:3)&facet.query=(dc.type:9 AND search.resourcetype:4)&facet.query=(dc.type:9 AND search.resourcetype:5)&facet.query=(dc.type:9 AND search.resourcetype:6)&facet.query=(dc.type:10 AND search.resourcetype:3)&facet.query=(dc.type:10 AND search.resourcetype:4)&facet.query=(dc.type:10 AND search.resourcetype:5)&facet.query=(dc.type:10 AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/1.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/1.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/1.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/1.*/ AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/2.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/2.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/2.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/2.*/ AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/3.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/3.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/3.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/3.*/ AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/4.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/4.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/4.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/4.*/ AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/5.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/5.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/5.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/5.*/ AND search.resourcetype:6)&facet.query=(PJSubject_keyword:/6.*/ AND search.resourcetype:3)&facet.query=(PJSubject_keyword:/6.*/ AND search.resourcetype:4)&facet.query=(PJSubject_keyword:/6.*/ AND search.resourcetype:5)&facet.query=(PJSubject_keyword:/6.*/ AND search.resourcetype:6)`,
       pdf: {  
           pageOrientation:"landscape",
           content:[  
              {  
                 text:[  
                    {  
                       text:"Bảng 4: CÔNG BỐ KHOA HỌC VÀ CÔNG NGHỆ\n",
                       fontSize:14,
                       alignment:"center",
                       bold:true
                    },
                    {  
                       text:"Đơn vị tính: Công bố"               + "\n",
                       fontSize:11,
                       alignment:"right"
                    }
                 ],
                 margin:[  
                    0,
                    20
                 ],
                 style:"headerTitle"
              },
              {  
                 style:"tableExample",
                 table:{  
                    widths:[  
                       "*",
                       120,
                       80,
                       80,
                       80,
                       100
                    ],
                    headerRows:2,
                    body:[  
                       [  
                          {  
                             text:"",
                             rowSpan:2,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          {  
                             text:"\nTổng số",
                             rowSpan:2,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          {  
                             text:"Bộ sưu tập",
                             colSpan:4,
                             alignment:"center",
                             bold:true,
                             style:"tdStyle"
                          },
                          "",
                          "",
                          ""
                       ],
                       [  
                          "",
                          "",
                          {  
                             text:"ISI",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Scopus",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Quốc tế",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"Trong nước",
                             alignment:"center",
                             style:"tdStyle"
                          }
                       ],
                       [  
                          {  
                             text:"A",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"1",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"2",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"3",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"4",
                             alignment:"center",
                             style:"tdStyle"
                          },
                          {  
                             text:"5",
                             alignment:"center",
                             style:"tdStyle"
                          }
                       ],
                       [  
                          {  
                             text:"1. Tổng số",
                             alignment:"left",
                             bold:true
                          },
                          {  
                             text:"dataX[\"(search.resourcetype:3)\"] + dataX[\"(search.resourcetype:4)\"] + dataX[\"(search.resourcetype:5)\"] + dataX[\"(search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"2. Chia theo Loại công bố",
                             alignment:"left",
                             bold:true
                          },
                          "",
                          "",
                          "",
                          "",
                          ""
                       ],
                       [  
                          {  
                             text:"- Bài báo",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:1 AND search.resourcetype:3)\"] + dataX[\"(dc.type:1 AND search.resourcetype:4)\"] + dataX[\"(dc.type:1 AND search.resourcetype:5)\"] + dataX[\"(dc.type:1 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:1 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:1 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:1 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:1 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Kỷ yếu hội thảo",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:2 AND search.resourcetype:3)\"] + dataX[\"(dc.type:2 AND search.resourcetype:4)\"] + dataX[\"(dc.type:2 AND search.resourcetype:5)\"] + dataX[\"(dc.type:2 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:2 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:2 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:2 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:2 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Báo cáo kết quả nhiệm vụ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:3 AND search.resourcetype:3)\"] + dataX[\"(dc.type:3 AND search.resourcetype:4)\"] + dataX[\"(dc.type:3 AND search.resourcetype:5)\"] + dataX[\"(dc.type:3 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:3 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:3 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:3 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:3 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Sách",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:4 AND search.resourcetype:3)\"] + dataX[\"(dc.type:4 AND search.resourcetype:4)\"] + dataX[\"(dc.type:4 AND search.resourcetype:5)\"] + dataX[\"(dc.type:4 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:4 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:4 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:4 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:4 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Luận án tiến sĩ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:5 AND search.resourcetype:3)\"] + dataX[\"(dc.type:5 AND search.resourcetype:4)\"] + dataX[\"(dc.type:5 AND search.resourcetype:5)\"] + dataX[\"(dc.type:5 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:5 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:5 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:5 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:5 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Luận án thạc sĩ ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:6 AND search.resourcetype:3)\"] + dataX[\"(dc.type:6 AND search.resourcetype:4)\"] + dataX[\"(dc.type:6 AND search.resourcetype:5)\"] + dataX[\"(dc.type:6 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:6 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:6 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:6 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:6 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Bài trích tạp chí",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:7 AND search.resourcetype:3)\"] + dataX[\"(dc.type:7 AND search.resourcetype:4)\"] + dataX[\"(dc.type:7 AND search.resourcetype:5)\"] + dataX[\"(dc.type:7 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:7 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:7 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:7 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:7 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Bài trích kỷ yếu",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:8 AND search.resourcetype:3)\"] + dataX[\"(dc.type:8 AND search.resourcetype:4)\"] + dataX[\"(dc.type:8 AND search.resourcetype:5)\"] + dataX[\"(dc.type:8 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:8 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:8 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:8 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:8 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Bài trích sách",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:9 AND search.resourcetype:3)\"] + dataX[\"(dc.type:9 AND search.resourcetype:4)\"] + dataX[\"(dc.type:9 AND search.resourcetype:5)\"] + dataX[\"(dc.type:9 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:9 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:9 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:9 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:9 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Bài nghiên cứu",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(dc.type:10 AND search.resourcetype:3)\"] + dataX[\"(dc.type:10 AND search.resourcetype:4)\"] + dataX[\"(dc.type:10 AND search.resourcetype:5)\"] + dataX[\"(dc.type:10 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:10 AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:10 AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:10 AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(dc.type:10 AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"3. Chia theo lĩnh vực KHCN",
                             alignment:"left",
                             bold:true
                          },
                          "",
                          "",
                          "",
                          "",
                          ""
                       ],
                       [  
                          {  
                             text:"- Khoa học tự nhiên",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/1.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học kỹ thuật và công nghệ",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/2.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học y, dược",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/3.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học nông nghiệp",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/4.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học xã hội",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/5.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ],
                       [  
                          {  
                             text:"- Khoa học nhân văn",
                             alignment:"left",
                             margin:[  
                                15,
                                0,
                                0,
                                0
                             ]
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:3)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:4)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:5)\"] + dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:3)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:4)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:5)\"]",
                             type:"function",
                             alignment:"center"
                          },
                          {  
                             text:"dataX[\"(PJSubject_keyword:/6.*/ AND search.resourcetype:6)\"]",
                             type:"function",
                             alignment:"center"
                          }
                       ]
        
                    ]
                 },
                 margin:[  
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
       query: `q=resourcetype_group:crispatents&rows=0&facet=true&facet.query=(crispatents.patentstype:Bằng độc quyền sáng chế)&facet.query=(crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)&facet.query=(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)&facet.query=(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)&facet.query=(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)&facet.query=(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)`,
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 5: SÁNG CHẾ KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Sáng chế"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    120,
                    80,
                    100
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại bằng",
                          colSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Sáng chế",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải pháp hữu ích",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crispatents.patentstype:Bằng độc quyền sáng chế)\"] + dataX[\"(crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crispatents.patentstype:Bằng độc quyền sáng chế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo Tình trạng hiệu lực",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Còn hiệu lực",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)\"] + dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Còn hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Hết hiệu lực",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)\"] + dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền sáng chế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(patentsstatus:Hết hiệu lực AND crispatents.patentstype:Bằng độc quyền giải pháp hữu ích)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 6:  DỮ LIỆU TIÊU CHUẨN \n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Tiêu chuẩn"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    50,
                    50,
                    50,
                    50,
                    50,
                    50
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại Tiêu chuẩn",
                          colSpan:6,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
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
                          text:"TCVN",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"TCCS",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"QCVN",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"QCĐP",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"ĐLVN",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Quốc tế",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"5",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"6",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"7",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(standardstype:TCVN)\"] + dataX[\"(standardstype:TCCS)\"] + dataX[\"(standardstype:QCVN)\"] + dataX[\"(standardstype:QCĐP)\"] + dataX[\"(standardstype:ĐLVN)\"] + dataX[\"(standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:TCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:TCCS)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:QCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:QCĐP)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:ĐLVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo Loại công bố",
                          alignment:"left",
                          bold:true
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
                       {  
                          text:"- Còn hiệu lực",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCCS)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCĐP)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:ĐLVN)\"] + dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:TCCS)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:QCĐP)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:ĐLVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Còn hiệu lực AND standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Hết hiệu lực",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCCS)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCĐP)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:ĐLVN)\"] + dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:TCCS)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:QCĐP)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:ĐLVN)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(standardsstatus:Hết hiệu lực AND standardstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 7: CUNG CẦU CÔNG NGHỆ  \n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Công nghệ"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    50,
                    50,
                    50
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại công nghệ",
                          colSpan:3,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                       ""
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Công nghệ thiết bị",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải pháp phần mềm",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Dịch vụ",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(techstype:Công nghệ, thiết bị)\"] + dataX[\"(techstype:Giải pháp phần mềm)\"] + dataX[\"(techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo cung cầu",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Nguồn cung",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cung AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Nguồn cầu",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techscollection:Nguồn cầu AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"3. Chia theo lĩnh vực KHCN",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:1 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:1 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:1 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:1 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:1 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:1 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:2 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:2 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:2 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:2 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:2 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:2 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:3 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:3 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:3 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:3 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:3 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:3 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:4 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:4 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:4 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:4 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:4 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:4 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:5 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:5 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:5 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:5 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:5 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:5 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:6 AND techstype:Công nghệ, thiết bị)\"] + dataX[\"(cristechs.techssubject:6 AND techstype:Giải pháp phần mềm)\"] + dataX[\"(cristechs.techssubject:6 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:6 AND techstype:Công nghệ, thiết bị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:6 AND techstype:Giải pháp phần mềm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(cristechs.techssubject:6 AND techstype:Dịch vụ)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                 ]
              },
              margin:[  
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
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 8: GIẢI THƯỞNG KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Giải thưởng"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    50,
                    50,
                    50,
                    50,
                    50
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại giải thưởng",
                          colSpan:5,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
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
                          text:"Giải thưởng Hồ Chí Minh",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải thưởng Nhà nước",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải thưởng của Bộ, ngành, địa phương",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải thưởng của tổ chức trong nước",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giải thưởng của tổ chức quốc tế",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"5",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"6",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo lĩnh vực KHCN",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/1.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/2.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/3.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/4.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/5.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"] + dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Hồ Chí Minh)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng Nhà nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của Bộ, ngành, địa phương)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(AwardsSubject:/6.*/ AND crisawards.awardstype:Giải thưởng của tổ chức quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
       query: `q=resourcetype_group:crisevents&rows=0&facet=true&facet.query=(crisevents.eventstype:Hội nghị)&facet.query=(crisevents.eventstype:Hội thảo)&facet.query=(crisevents.eventstype:Tọa đàm)&facet.query=(crisevents.eventstype:Hội chợ)&facet.query=(crisevents.eventstype:Triển lãm)&facet.query=(crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/1.*/ AND crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/2.*/ AND crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/3.*/ AND crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/4.*/ AND crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/5.*/ AND crisevents.eventstype:Lễ hội)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Hội nghị)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Tọa đàm)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Hội chợ)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Triển lãm)&facet.query=(eventssubject:/6.*/ AND crisevents.eventstype:Lễ hội)`,
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 9: SỰ KIỆN KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Sự kiện"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    50,
                    50,
                    50,
                    50,
                    50,
                    50
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại sự kiện",
                          colSpan:6,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
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
                          text:"Hội nghị",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Hội thảo",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Tọa đàm",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Hội chợ",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Triển lãm",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Lễ hội",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"5",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"6",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"7",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Hội nghị)\"] + dataX[\"(crisevents.eventstype:Hội thảo)\"] + dataX[\"(crisevents.eventstype:Tọa đàm)\"] + dataX[\"(crisevents.eventstype:Hội chợ)\"] + dataX[\"(crisevents.eventstype:Triển lãm)\"] + dataX[\"(crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo lĩnh vực KHCN",
                          alignment:"left",
                          bold:true
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
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/1.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/2.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/3.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/4.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/5.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội nghị)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Tọa đàm)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội chợ)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Triển lãm)\"] + dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội nghị)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội thảo)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Tọa đàm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Hội chợ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Triển lãm)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(eventssubject:/6.*/ AND crisevents.eventstype:Lễ hội)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 11: TÀI TRỢ  KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Tài trợ"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    50,
                    50,
                    50
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại tài trợ",
                          colSpan:3,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                       ""
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Nghiên cứu phát triển",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Phát triển tiềm lực",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Hợp tác quốc tế",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo tình trạng",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Đang gọi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đang gọi AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Đã kết thúc",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingsstatus:Đã kết thúc AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"3. Chia theo lĩnh vực KHCN",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/1.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/2.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/3.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/4.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/5.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"] + dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"] + dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Nghiên cứu phát triển)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Phát triển tiềm lực)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(fundingssubject:/6.*/ AND crisfundings.fundingstype:Hợp tác quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                 ]
              },
              margin:[  
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
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 10: TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Tạp chí"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    120,
                    100,
                    100
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Loại tạp chí",
                          colSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       ""
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Trong nước",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Quốc tế",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Chia theo đơn vị chủ quản",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       ""
                    ],
                    [
                       "", "", "", "",
                    ],
                    [  
                     {  
                        text:"3. Chia theo lĩnh vực KHCN",
                        alignment:"left",
                        bold:true
                     },
                     "",
                     "",
                     ""
                     ],
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/1.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/2.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/3.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/4.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/5.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Trong nước)\"] + dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Trong nước)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisjournals.journalssubject:/6.*/ AND crisjournals.journalstype:Quốc tế)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
       query: `q=resourcetype_group:orgunits&rows=0&facet=true&facet.query=(crisou.type:Công lập NOT Ngoài)&facet.query=(crisou.type:Ngoài công lập)&facet.query=(crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/1.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/1.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/1.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/2.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/2.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/2.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/3.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/3.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/3.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/4.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/4.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/4.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/5.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/5.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/5.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(OUSubject_keyword:/6.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(OUSubject_keyword:/6.*/ AND crisou.type:Ngoài công lập)&facet.query=(OUSubject_keyword:/6.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(crisou.activity:/1.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(crisou.activity:/1.*/ AND crisou.type:Ngoài công lập)&facet.query=(crisou.activity:/1.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(crisou.activity:/2.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(crisou.activity:/2.*/ AND crisou.type:Ngoài công lập)&facet.query=(crisou.activity:/2.*/ AND crisou.type:Vốn nước ngoài)&facet.query=(crisou.activity:/3.*/ AND crisou.type:Công lập NOT Ngoài)&facet.query=(crisou.activity:/3.*/ AND crisou.type:Ngoài công lập)&facet.query=(crisou.activity:/3.*/ AND crisou.type:Vốn nước ngoài)`,
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 2: SỐ TỔ CHỨC KHOA HỌC VÀ CÔNG NGHỆ\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Tổ chức"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
                    "*",
                    100,
                    100,
                    100,
                    100
                 ],
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Chia theo loại hình kinh tế",
                          colSpan:3,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                       ""
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Công lập",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Ngoài công lập",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Vốn nước ngoài",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"(crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(crisou.type:Ngoài công lập)\"] + dataX[\"(crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2.Chia theo loại hình hoạt động",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Nghiên cứu khoa học",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/1.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(crisou.activity:/1.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(crisou.activity:/1.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/1.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/1.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/1.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Phát triển công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/2.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(crisou.activity:/2.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(crisou.activity:/2.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/2.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/2.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/2.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Dịch vụ khoa học và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/3.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(crisou.activity:/3.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(crisou.activity:/3.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/3.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/3.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisou.activity:/3.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"3. Chia theo Lĩnh vực chuyên môn KHCN",
                          alignment:"left",
                          bold:true
                       },
                       "",
                       "",
                       "",
                       ""
                    ],
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/1.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/2.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/3.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/4.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/5.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Công lập NOT Ngoài)\"] + dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Ngoài công lập)\"] + dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Công lập NOT Ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Ngoài công lập)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(OUSubject_keyword:/6.*/ AND crisou.type:Vốn nước ngoài)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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
       query: `q=resourcetype_group:researcherprofiles&rows=0&facet=true&facet.query=(crisrp.degree:Tiến sĩ)&facet.query=(crisrp.degree:Thạc sĩ)&facet.query=(crisrp.degree:Kỹ sư)&facet.query=(crisrp.degree:Cử nhân)&facet.query=-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân)&facet.query=(crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.position:Phó giáo sư)&facet.query=(crisrp.position:/*Nghiên cứu*/)&facet.query=-(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/1.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/1.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/1.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/1.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/1.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/1.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/1.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/1.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/1.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.subject:/2.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/2.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/2.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/2.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/2.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/2.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/2.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/2.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/2.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.subject:/3.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/3.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/3.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/3.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/3.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/3.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/3.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/3.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/3.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.subject:/4.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/4.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/4.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/4.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/4.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/4.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/4.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/4.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/4.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.subject:/5.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/5.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/5.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/5.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/5.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/5.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/5.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/5.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/5.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.subject:/6.*/ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.subject:/6.*/ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.subject:/6.*/ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.subject:/6.*/ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.subject:/6.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.subject:/6.*/ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.subject:/6.*/ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.subject:/6.*/ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.subject:/6.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.iso-country:VN AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.iso-country:VN AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.iso-country:VN AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.iso-country:VN AND crisrp.degree:Cử nhân)&facet.query=(crisrp.iso-country:VN AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.iso-country:VN AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.iso-country:VN AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.iso-country:VN AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.iso-country:VN AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(-(crisrp.iso-country:VN) AND crisrp.degree:Tiến sĩ)&facet.query=(-(crisrp.iso-country:VN) AND crisrp.degree:Thạc sĩ)&facet.query=(-(crisrp.iso-country:VN) AND crisrp.degree:Kỹ sư)&facet.query=(-(crisrp.iso-country:VN) AND crisrp.degree:Cử nhân)&facet.query=(-(crisrp.iso-country:VN) AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(-(crisrp.iso-country:VN) AND crisrp.position:Giáo sư NOT Phó)&facet.query=(-(crisrp.iso-country:VN) AND crisrp.position:Phó giáo sư)&facet.query=(-(crisrp.iso-country:VN) AND crisrp.position:/*Nghiên cứu*/)&facet.query=(-(crisrp.iso-country:VN) AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=*&facet.query=crisrp.iso-country:VN&facet.query=-crisrp.iso-country:VN&facet.query=crisrp.subject:/1.*/&facet.query=crisrp.subject:/2.*/&facet.query=crisrp.subject:/3.*/&facet.query=crisrp.subject:/4.*/&facet.query=crisrp.subject:/5.*/&facet.query=crisrp.subject:/6.*/&facet.query=crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `]&facet.query=crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `]&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 35) + ` TO ` + (new Date().getFullYear()) + `] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 55) + ` TO ` + (new Date().getFullYear() - 36) + `] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 60) + ` TO ` + (new Date().getFullYear() - 56) + `] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[` + (new Date().getFullYear() - 65) + ` TO ` + (new Date().getFullYear() - 61) + `] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.degree:Cử nhân)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.birthDay.year_sort:[* TO ` + (new Date().getFullYear() - 65) + `] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Nam)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Nam AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Nam AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Nam AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.gender:Nam AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Nam AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Nam AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Nữ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Nữ AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Nữ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Nữ AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.gender:Nữ AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Nữ AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Nữ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))&facet.query=(crisrp.gender:Không xác định)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Tiến sĩ)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Thạc sĩ)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Kỹ sư)&facet.query=(crisrp.gender:Không xác định AND crisrp.degree:Cử nhân)&facet.query=(crisrp.gender:Không xác định AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))&facet.query=(crisrp.gender:Không xác định AND crisrp.position:Giáo sư NOT Phó)&facet.query=(crisrp.gender:Không xác định AND crisrp.position:Phó giáo sư)&facet.query=(crisrp.gender:Không xác định AND crisrp.position:/*Nghiên cứu*/)&facet.query=(crisrp.gender:Không xác định AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))`,
       pdf: {  
        pageOrientation:"landscape",
        content:[  
           {  
              text:[  
                 {  
                    text:"Bảng 1: NHÂN LỰC KHOA HỌC VÀ CÔNG NGHỆ\n(Số người làm việc trong ngành khoa hoc và công nghệ)\n",
                    fontSize:14,
                    alignment:"center",
                    bold:true
                 },
                 {  
                    text:"Đơn vị tính: Người"               + "\n",
                    fontSize:11,
                    alignment:"right"
                 }
              ],
              margin:[  
                 0,
                 20
              ],
              style:"headerTitle"
           },
           {  
              style:"tableExample",
              table:{  
                 widths:[  
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
                 headerRows:2,
                 body:[  
                    [  
                       {  
                          text:"",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"\nTổng số",
                          rowSpan:2,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       {  
                          text:"Chia theo trình độ học vấn",
                          colSpan:5,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                       "",
                       "",
                       "",
                       {  
                          text:"Chia theo chức danh, học hàm",
                          colSpan:4,
                          alignment:"center",
                          bold:true,
                          style:"tdStyle"
                       },
                       "",
                       "",
                       ""
                    ],
                    [  
                       "",
                       "",
                       {  
                          text:"Tiến sĩ",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Thạc sĩ",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Kỹ sư",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Cử nhân",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Khác",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Giáo sư",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Phó giáo sư",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Nghiên cứu",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"Khác",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"A",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"1",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"2",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"3",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"4",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"5",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"6",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"7",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"8",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"9",
                          alignment:"center",
                          style:"tdStyle"
                       },
                       {  
                          text:"10",
                          alignment:"center",
                          style:"tdStyle"
                       }
                    ],
                    [  
                       {  
                          text:"1. Tổng số",
                          alignment:"left",
                          bold:true
                       },
                       {  
                          text:"dataX[\"*\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"-(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"-(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"2. Giới tính",
                          alignment:"left",
                          bold:true
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
                    [  
                       {  
                          text:"- Nam",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nam AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Nữ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Nữ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Không xác định",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.gender:Không xác định AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"3. Chia theo quốc tịch",
                          alignment:"left",
                          bold:true
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
                    [  
                       {  
                          text:"- Việt Nam",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.iso-country:VN\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.iso-country:VN AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Nước ngoài",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"-crisrp.iso-country:VN\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(-(crisrp.iso-country:VN) AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"4. Chia theo lĩnh vực chuyên môn",
                          alignment:"left",
                          bold:true
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
                    [  
                       {  
                          text:"- Khoa học tự nhiên",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/1.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/1.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học kỹ thuật và công nghệ",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/2.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/2.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học y, dược",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/3.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/3.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nông nghiệp",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/4.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/4.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học xã hội",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/5.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/5.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Khoa học nhân văn",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.subject:/6.*/\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.subject:/6.*/ AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"5. Chia theo độ tuổi",
                          alignment:"left",
                          bold:true
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
                    [  
                       {  
                          text:"- Đến 35 tuổi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "]\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 35) + " TO " + (new Date().getFullYear()) + "] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Từ 36-55 tuổi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "]\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 55) + " TO " + (new Date().getFullYear() - 36) + "] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Từ 56-60 tuổi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "]\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 60) + " TO " + (new Date().getFullYear() - 56) + "] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Từ 61-65 tuổi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "]\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[" + (new Date().getFullYear() - 65) + " TO " + (new Date().getFullYear() - 61) + "] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ],
                    [  
                       {  
                          text:"- Trên 65 tuổi",
                          alignment:"left",
                          margin:[  
                             15,
                             0,
                             0,
                             0
                          ]
                       },
                       {  
                          text:"dataX[\"crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "]\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Tiến sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Thạc sĩ)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Kỹ sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.degree:Cử nhân)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND -(crisrp.degree:Tiến sĩ) AND -(crisrp.degree:thạc Sĩ) and -(crisrp.degree:Kỹ sư) and -(crisrp.degree:Cử nhân))\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:Giáo sư NOT Phó)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:Phó giáo sư)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND crisrp.position:/*Nghiên cứu*/)\"]",
                          type:"function",
                          alignment:"center"
                       },
                       {  
                          text:"dataX[\"(crisrp.birthDay.year_sort:[* TO " + (new Date().getFullYear() - 65) + "] AND -(crisrp.position:Giáo sư NOT Phó) AND -(crisrp.position:Phó giáo sư) and -(crisrp.position:/*Nghiên cứu*/))\"]",
                          type:"function",
                          alignment:"center"
                       }
                    ]
                 ]
              },
              margin:[  
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