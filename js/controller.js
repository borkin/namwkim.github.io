var massvis = angular.module('massvis', []);

massvis.controller('mainCtrl', ['$scope',  function ($scope) {
	$scope.title 		= " MASSVIS Dataset"
	$scope.subtitle		= "Massachusetts (Massive) Visualization Dataset"

	$scope.projectTitle = "Massachusetts (Massive) Visualization Dataset"
	$scope.projectDesc = "Understanding the basic cognitive and perceptual properties of a visualization is essential\
   for effective data presentation as well as communication to the viewer. To gain deeper insight into what elements of a visualization affect its memorability, recognition, and recall, we constructed this database by scraping multiple sources of real-world visualization \
  publication venues online covering government reports, infographic blogs, news media, and scientific journals.\
   The diversity and distribution of these visualizations represent a broad set of data visualizations in the wild."

  $scope.acknowledgement = "This work was partly supported by the National Science Foundation (NSF) \
  under grant 1016862 to A.O., as well as Google and Xerox awards. M.B. was supported by the NSF Graduate \
  Research Fellowship Program. Z.B. was supported by the Natural Sciences and Engineering Research Council of \
  Canada Postgraduate Doctoral Scholarship (NSERC PGS-D). N.K. was supported by the Kwanjeong Educational \
  Foundation. Any opinions, findings, and conclusions or recommendations expressed in this material are those\
   of the author(s) and do not necessarily reflect the views of the National Science Foundation and other \
   funding agencies."
	$scope.papers = [
    {
      title: "Beyond Memorability: Visualization Recognition and Recall",
      authors: "Borkin, M.,  Bylinskii, Z., Kim, N.W., Bainbridge C.M., Yeh, C.S., Borkin, D., Pfister, H., & Oliva, A.",
      source: "IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis 2015) - Conditionally Accepted"
    },
    {
      title: "A Crowdsourced Alternative to Eye-tracking for Visualization Understanding",
      link: "http://namwkim.org/files/CHI2015-WIP-Bubble.pdf",
      slides:"http://namwkim.org/files/CHI2015-WIP-Bubble-Poster.pdf",
      bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/371751",
      authors: "Kim, N.W., Bylinskii, Z., Borkin, M., Oliva, A., Gajos, K.Z., & Pfister, H.",
      site: "https://study.namwkim.org/bubble/admin",
      source: "Proceedings of the ACM Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA '15)"
    },
    {
      title: "What Makes a Visualization Memorable?",
      link: "http://vcg.seas.harvard.edu/files/pfister/files/infovis_borkin-128-camera_ready_0.pdf",
      supplement: "http://vcg.seas.harvard.edu/files/pfister/files/supplemental-infovis128.pdf",
      video: "http://vcg.seas.harvard.edu/files/pfister/files/experiment-screengrab.mp4",
      slides:"http://vcg.seas.harvard.edu/files/pfister/files/infovis2013_borkin-vizmem.pdf",
      bibtex: "http://vcg.seas.harvard.edu/publications/export/bibtex/83461",
      authors: "Borkin, M., Vo, A., Bylinskii, Z., Isola, P., Sunkavalli, S., Oliva, A., & Pfister, H.",
      source: "IEEE Transactions on Visualization and Computer Graphics (Proceedings of InfoVis 2013)"
    }
    ]
	$scope.members = [
    {
    	name: "Michelle A. Borkin",
    	url: "http://people.seas.harvard.edu/~borkin/",
    	photo: "michelle.jpg",
    	affiliation: "Assistant Professor, Northeastern CCIS"
    },
    {
    	name: "Zoya Bylinskii",
    	url: "http://web.mit.edu/zoya/www/",
    	photo: "zoya.jpg",
    	affiliation: "PhD Candidate, MIT EECS"
    },
    {
      name: "Krzysztof Z. Gajos",
      url: "http://www.eecs.harvard.edu/~kgajos/",
      photo: "gajos.jpg",
      affiliation: "Assosiate Professor, Harvard SEAS"
    },
    {
      name: "Nam Wook Kim",
      url: "http://namwkim.org",
      photo: "nam.png",
      affiliation: "PhD Student, Harvard SEAS"
    },
    {
      name: "Aude Oliva",
      url: "http://cvcl.mit.edu/audeoliva.html",
      photo: "aude.png",
      affiliation: "Principal Research Scientist, MIT EECS"
    },
    {
      name: "Hanspeter Pfister",
      url: "http://vcg.seas.harvard.edu/people/hanspeter-pfister",
      photo: "hp.jpg",
      affiliation: "Professor, Harvard SEAS"
    }

    ];
    $scope.datasetTitle = "Dataset Request"
    $scope.contactTitle = "Let's Get In Touch!";
    $scope.contactDesc = "Questions? Comments?"
}]);
