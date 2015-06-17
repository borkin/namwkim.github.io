var massvis = angular.module('massvis', []);

massvis.controller('mainCtrl', ['$scope',  function ($scope) {
	$scope.title 		= "Title"
	$scope.subtitle		= "Subtitle"

	$scope.aboutTitle = "Project Title"
	$scope.projectDesc = "Project Summary"

	$scope.papers = [
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
    	affiliation: "Assistant Professor, Northeastern CS"
    },
    {
    	name: "Zoya Bylinskii",
    	url: "http://web.mit.edu/zoya/www/",
    	photo: "zoya.jpg",
    	affiliation: "PhD Candidate, MIT EECS"
    },
    {
    	name: "Nam Wook Kim",
    	url: "namwkim.org",
    	photo: "nam.png",
    	affiliation: "PhD Student, Harvard SEAS"
    }
    ];
    $scope.datasetTitle = "Dataset Title"
    $scope.contactTitle = "Let's Get In Touch!";
    $scope.contactDesc = "Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!"
}]);