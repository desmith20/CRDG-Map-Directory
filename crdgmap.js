

                var map = L.eeGeo.map('map', '383ece868d7ec1eeb1712bc069d222d5', {
                    center: [21.297977, -157.822357],
                    zoom: 18,
                    });
                    
                    setTimeout(function() 
                    {
                    map.setView([21.297977, -157.822357], 21, {headingDegrees: 204.374, tiltDegrees:0.0});
                    }, 5000);

                    // it.crdg.hawaii.edu/opihi-test

                    let div_element = document.createElement("div");

                    let p_element = document.createElement("p");
                    p_element.innerHTML = "That is Mark";

                    let markYap = document.createElement("a");
                    markYap.href = "https://coe.hawaii.edu/directory/index.php?person=yapm"
                    markYap.target = "_blank"
                    markYap.innerHTML = "Mark Yap"
                    

                    let itDepartment = 
                    "<h3>IT Department </h3> <hr> <ul>"+
                        "<a href='https://coe.hawaii.edu/directory/index.php?person=yapm' target='_blank'> Mark Yap </a>"+
                        "<li> Richard Tran </li>"+
                         "<li> Gary Romero </li>"+
                          "<li> Rob Nakama </li>"+
                           "<li> Dan Smith</li>"+
                           "<br />'<a href='https://google.com/' target='_blank'>metadata</a>'";
                            "</ul>";
                    
                    

                    mathDepartment = markYap;



                    let crdgLocations = [
		            [itDepartment,21.297891, -157.822502],
		            ["parkingLot",21.298695, -157.822495],
                    ["COE Portables",21.298417, -157.822520],
                    ["Everly Hall",21.298817, -157.821971],
                    ["Wist Hall",21.298470, -157.821961],
                    ["University Lab School (UHS3)",21.297830, -157.821646],
                    ["Multipurpose Building (MPB)",21.297520, -157.821999],
                    ["Castle Memorial (CM)",21.297524, -157.822820],
                    ["Castle Annex (MaPs)",21.297389, -157.823327],
                    ["ULS Elementary",21.297075, -157.822774],
                    ["ULS Portables",21.298407, -157.823364],
                    ["University Annexes",21.298233, -157.822005],
                    [mathDepartment,21.298071, -157.822513]
                    ];

                    for (var i = 0; i < crdgLocations.length; i++) {
			                marker = new L.marker([crdgLocations[i][1],crdgLocations[i][2]])
                            .bindPopup(crdgLocations[i][0])
                                     // crdgLocations[i][0]
				            .addTo(map);
                        }
                        
                    crdgLocations.on('mouseover', function (e) {
                    this.openPopup();
                    });
                    crdgLocations.on('mouseout', function (e) {
                    this.closePopup();
                    });
