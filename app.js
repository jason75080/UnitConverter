var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.metricVolumeValue = 0;
		ucc.imperialVolumeValue = 0;
		ucc.metricVolumeValue2 = 0;
		ucc.imperialVolumeValue2 = 0;
		
		ucc.metricLengthValue = 0;
		ucc.imperialLengthValue = 0;
		ucc.metricLengthValue2 = 0;
		ucc.imperialLengthValue2 = 0;
		
		ucc.metricMassValue = 0;
		ucc.imperialMassValue = 0;
		ucc.metricMassValue2 = 0;
		ucc.imperialMassValue2 = 0;

		ucc.metric_volume_units = 
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metic"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metic"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metic"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metic"
			},	
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metic"
			}
		];		
		
		ucc.imperial_volume_units = 
		[
			{
				unit_name: "Cubic Inches",
				unit_code: "in3",
				type: "imperial"
			},
			{
				unit_name: "Cubic Feet",
				unit_code: "ft3",
				type: "imperial"
			},
			{
				unit_name: "Fluid ounces",
				unit_code: "floz",
				type: "imperial"
			},
			{
				unit_name: "Pints",
				unit_code: "pt",
				type: "imperial"
			},	
			{
				unit_name: "Gallons",
				unit_code: "gal",
				type: "imperial"
			}
		];		
		
		ucc.metric_length_units = 
		[
			{
				unit_name: "Millimeter",
				unit_code: "mm",
				type: "metic"
			},
			{
				unit_name: "Centimeter",
				unit_code: "cm",
				type: "metic"
			},
			{
				unit_name: "Meter",
				unit_code: "m",
				type: "metic"
			},
			{
				unit_name: "Kilometer",
				unit_code: "km",
				type: "metic"
			}
		];		
		
		ucc.imperial_length_units = 
		[
			{
				unit_name: "Inches",
				unit_code: "in",
				type: "imperial"
			},
			{
				unit_name: "Feet",
				unit_code: "ft",
				type: "imperial"
			},
			{
				unit_name: "Yard",
				unit_code: "yd",
				type: "imperial"
			},
			{
				unit_name: "mile",
				unit_code: "ml",
				type: "imperial"
			}
		];	
		
		ucc.metric_mass_units = 
		[
			{
				unit_name: "milligram",
				unit_code: "mg",
				type: "metic"
			},
			{
				unit_name: "Gram",
				unit_code: "g",
				type: "metic"
			},
			{
				unit_name: "Kilogram",
				unit_code: "kg",
				type: "metic"
			},
			{
				unit_name: "Tonne",
				unit_code: "t",
				type: "metic"
			}
		];		
		
		ucc.imperial_mass_units = 
		[
			{
				unit_name: "Ounce",
				unit_code: "oz",
				type: "imperial"
			},
			{
				unit_name: "Pound",
				unit_code: "lb",
				type: "imperial"
			},
			{
				unit_name: "Stone",
				unit_code: "st",
				type: "imperial"
			},
			{
				unit_name: "Ton",
				unit_code: "tn",
				type: "imperial"
			}
		];	
		
		$scope.changeMass1 = function() {
		    if (ucc.selected_metric_mass_unit.unit_code == 'mg') {
		        if (ucc.selected_imperial_mass_unit.unit_code == 'oz')
		        {
		            $scope.ucc.imperialMassValue = .0000352 * $scope.ucc.metricMassValue;
		        } 
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'lb')
		        {
		            $scope.ucc.imperialMassValue = .00001 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'st')
		        {
		            $scope.ucc.imperialMassValue = .00001 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'tn')
		        {
		            $scope.ucc.imperialMassValue = .00001 * $scope.ucc.metricMassValue;
		        }
		    } else if (ucc.selected_metric_mass_unit.unit_code == 'g') {
		        if (ucc.selected_imperial_mass_unit.unit_code == 'oz')
		        {
		            $scope.ucc.imperialMassValue = .0352 * $scope.ucc.metricMassValue;
		        } 
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'lb')
		        {
		            $scope.ucc.imperialMassValue = .0022 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'st')
		        {
		            $scope.ucc.imperialMassValue = .000157 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'tn')
		        {
		            $scope.ucc.imperialMassValue = .00001 * $scope.ucc.metricMassValue;
		        }
		    } else if (ucc.selected_metric_mass_unit.unit_code == 'kg') {
		        if (ucc.selected_imperial_mass_unit.unit_code == 'oz')
		        {
		            $scope.ucc.imperialMassValue = 35.273 * $scope.ucc.metricMassValue;
		        } 
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'lb')
		        {
		            $scope.ucc.imperialMassValue = 2.204 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'st')
		        {
		            $scope.ucc.imperialMassValue = .157 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'tn')
		        {
		            $scope.ucc.imperialMassValue = .00098 * $scope.ucc.metricMassValue;
		        }
		    } else if (ucc.selected_metric_mass_unit.unit_code == 't') {
		        if (ucc.selected_imperial_mass_unit.unit_code == 'oz')
		        {
		            $scope.ucc.imperialMassValue = 35273.3 * $scope.ucc.metricMassValue;
		        } 
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'lb')
		        {
		            $scope.ucc.imperialMassValue = 2204.6 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'st')
		        {
		            $scope.ucc.imperialMassValue = 157.47 * $scope.ucc.metricMassValue;
		        }
		        else if (ucc.selected_imperial_mass_unit.unit_code == 'tn')
		        {
		            $scope.ucc.imperialMassValue = .9842 * $scope.ucc.metricMassValue;
		        }
		    } 
        };
        
        $scope.changeMass2 = function() {
		    if (ucc.selected_imperial_mass_unit2.unit_code == 'oz') {
		        if (ucc.selected_metric_mass_unit2.unit_code == 'mg')
		        {
		            $scope.ucc.metricMassValue2 = 28350 * $scope.ucc.imperialMassValue2;
		        } 
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'g')
		        {
		            $scope.ucc.metricMassValue2 = 28.35 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'kg')
		        {
		            $scope.ucc.metricMassValue2 = .02835 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 't')
		        {
		            $scope.ucc.metricMassValue2 = .00002835 * $scope.ucc.imperialMassValue2;
		        }
		    } else if (ucc.selected_imperial_mass_unit2.unit_code == 'lb') {
		        if (ucc.selected_metric_mass_unit2.unit_code == 'mg')
		        {
		            $scope.ucc.metricMassValue2 = 453592.37 * $scope.ucc.imperialMassValue2;
		        } 
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'g')
		        {
		            $scope.ucc.metricMassValue2 = 453.59237 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'kg')
		        {
		            $scope.ucc.metricMassValue2 = .45359237 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 't')
		        {
		            $scope.ucc.metricMassValue2 = .00045359 * $scope.ucc.imperialMassValue2;
		        }
		    } else if (ucc.selected_imperial_mass_unit2.unit_code == 'st') {
		        if (ucc.selected_metric_mass_unit2.unit_code == 'mg')
		        {
		            $scope.ucc.metricMassValue2 = 6350293.18 * $scope.ucc.imperialMassValue2;
		        } 
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'g')
		        {
		            $scope.ucc.metricMassValue2 = 6350.2918 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'kg')
		        {
		            $scope.ucc.metricMassValue2 = 6.35029318 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 't')
		        {
		            $scope.ucc.metricMassValue2 = .006350293 * $scope.ucc.imperialMassValue2;
		        }
		    } else if (ucc.selected_imperial_mass_unit2.unit_code == 'tn') {
		        if (ucc.selected_metric_mass_unit2.unit_code == 'mg')
		        {
		            $scope.ucc.metricMassValue2 = 1016046910 * $scope.ucc.imperialMassValue2;
		        } 
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'g')
		        {
		            $scope.ucc.metricMassValue2 = 1016046.91 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 'kg')
		        {
		            $scope.ucc.metricMassValue2 = 1016.04691 * $scope.ucc.imperialMassValue2;
		        }
		        else if (ucc.selected_metric_mass_unit2.unit_code == 't')
		        {
		            $scope.ucc.metricMassValue2 = 1.01604691 * $scope.ucc.imperialMassValue2;
		        }
		    } 
        };
		
		
		$scope.changeLength1 = function() {
		    if (ucc.selected_metric_length_unit.unit_code == 'mm') {
		        if (ucc.selected_imperial_length_unit.unit_code == 'in')
		        {
		            $scope.ucc.imperialLengthValue = .0393 * $scope.ucc.metricLengthValue;
		        } 
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ft')
		        {
		            $scope.ucc.imperialLengthValue = .00328 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'yd')
		        {
		            $scope.ucc.imperialLengthValue = .00109 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ml')
		        {
		            $scope.ucc.imperialLengthValue = .00001 * $scope.ucc.metricLengthValue;
		        }
		    } else if (ucc.selected_metric_length_unit.unit_code == 'cm') {
		        if (ucc.selected_imperial_length_unit.unit_code == 'in')
		        {
		            $scope.ucc.imperialLengthValue = .393 * $scope.ucc.metricLengthValue;
		        } 
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ft')
		        {
		            $scope.ucc.imperialLengthValue = .0328 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'yd')
		        {
		            $scope.ucc.imperialLengthValue = .0109 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ml')
		        {
		            $scope.ucc.imperialLengthValue = .00001 * $scope.ucc.metricLengthValue;
		        }
		    } else if (ucc.selected_metric_length_unit.unit_code == 'm') {
		        if (ucc.selected_imperial_length_unit.unit_code == 'in')
		        {
		            $scope.ucc.imperialLengthValue = 39.37 * $scope.ucc.metricLengthValue;
		        } 
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ft')
		        {
		            $scope.ucc.imperialLengthValue = 3.28 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'yd')
		        {
		            $scope.ucc.imperialLengthValue = 1.09 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ml')
		        {
		            $scope.ucc.imperialLengthValue = .00062 * $scope.ucc.metricLengthValue;
		        }
		    } else if (ucc.selected_metric_length_unit.unit_code == 'km') {
		        if (ucc.selected_imperial_length_unit.unit_code == 'in')
		        {
		            $scope.ucc.imperialLengthValue = 39370.07 * $scope.ucc.metricLengthValue;
		        } 
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ft')
		        {
		            $scope.ucc.imperialLengthValue = 3280.83 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'yd')
		        {
		            $scope.ucc.imperialLengthValue = 1093.6 * $scope.ucc.metricLengthValue;
		        }
		        else if (ucc.selected_imperial_length_unit.unit_code == 'ml')
		        {
		            $scope.ucc.imperialLengthValue = .6213 * $scope.ucc.metricLengthValue;
		        }
		    } 
        };
        
        $scope.changeLength2 = function() {
		    if (ucc.selected_imperial_length_unit2.unit_code == 'in') {
		        if (ucc.selected_metric_length_unit2.unit_code == 'mm')
		        {
		            $scope.ucc.metricLengthValue2 = 25.4 * $scope.ucc.imperialLengthValue2;
		        } 
		        else if (ucc.selected_metric_length_unit2.unit_code == 'cm')
		        {
		            $scope.ucc.metricLengthValue2 = 2.54 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'm')
		        {
		            $scope.ucc.metricLengthValue2 = .0254 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'km')
		        {
		            $scope.ucc.metricLengthValue2 = .0000254 * $scope.ucc.imperialLengthValue2;
		        }
		    } else if (ucc.selected_imperial_length_unit2.unit_code == 'ft') {
		        if (ucc.selected_metric_length_unit2.unit_code == 'mm')
		        {
		            $scope.ucc.metricLengthValue2 = 304.8 * $scope.ucc.imperialLengthValue2;
		        } 
		        else if (ucc.selected_metric_length_unit2.unit_code == 'cm')
		        {
		            $scope.ucc.metricLengthValue2 = 30.48 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'm')
		        {
		            $scope.ucc.metricLengthValue2 = .3048 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'km')
		        {
		            $scope.ucc.metricLengthValue2 = .0003048 * $scope.ucc.imperialLengthValue2;
		        }
		    } else if (ucc.selected_imperial_length_unit2.unit_code == 'yd') {
		        if (ucc.selected_metric_length_unit2.unit_code == 'mm')
		        {
		            $scope.ucc.metricLengthValue2 = 914.4 * $scope.ucc.imperialLengthValue2;
		        } 
		        else if (ucc.selected_metric_length_unit2.unit_code == 'cm')
		        {
		            $scope.ucc.metricLengthValue2 = 91.44 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'm')
		        {
		            $scope.ucc.metricLengthValue2 = .9144 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'km')
		        {
		            $scope.ucc.metricLengthValue2 = .0009144 * $scope.ucc.imperialLengthValue2;
		        }
		    } else if (ucc.selected_imperial_length_unit2.unit_code == 'ml') {
		        if (ucc.selected_metric_length_unit2.unit_code == 'mm')
		        {
		            $scope.ucc.metricLengthValue2 = 1609344 * $scope.ucc.imperialLengthValue2;
		        } 
		        else if (ucc.selected_metric_length_unit2.unit_code == 'cm')
		        {
		            $scope.ucc.metricLengthValue2 = 160934.4 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'm')
		        {
		            $scope.ucc.metricLengthValue2 = 1609.344 * $scope.ucc.imperialLengthValue2;
		        }
		        else if (ucc.selected_metric_length_unit2.unit_code == 'km')
		        {
		            $scope.ucc.metricLengthValue2 = 1.609344 * $scope.ucc.imperialLengthValue2;
		        }
		    } 
        };
        
		
		$scope.changeVolume1 = function() {
		    if (ucc.selected_metric_volume_unit.unit_code == 'cm3') {
		        if (ucc.selected_imperial_volume_unit.unit_code == 'in3')
		        {
		            $scope.ucc.imperialVolumeValue = .061 * $scope.ucc.metricVolumeValue;
		        } 
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'ft3')
		        {
		            $scope.ucc.imperialVolumeValue = 3.53 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'floz')
		        {
		            $scope.ucc.imperialVolumeValue = .035 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'pt')
		        {
		            $scope.ucc.imperialVolumeValue = .0017 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'gal')
		        {
		            $scope.ucc.imperialVolumeValue = .00021 * $scope.ucc.metricVolumeValue;
		        }
		    } else if (ucc.selected_metric_volume_unit.unit_code == 'dm3') {
		        if (ucc.selected_imperial_volume_unit.unit_code == 'in3')
		        {
		            $scope.ucc.imperialVolumeValue = 61.023 * $scope.ucc.metricVolumeValue;
		        } 
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'ft3')
		        {
		            $scope.ucc.imperialVolumeValue = .0353 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'floz')
		        {
		            $scope.ucc.imperialVolumeValue = 35.195 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'pt')
		        {
		            $scope.ucc.imperialVolumeValue = 1.759 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'gal')
		        {
		            $scope.ucc.imperialVolumeValue = .219 * $scope.ucc.metricVolumeValue;
		        }
		    } else if (ucc.selected_metric_volume_unit.unit_code == 'm3') {
		        if (ucc.selected_imperial_volume_unit.unit_code == 'in3')
		        {
		            $scope.ucc.imperialVolumeValue = 61023.759 * $scope.ucc.metricVolumeValue;
		        } 
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'ft3')
		        {
		            $scope.ucc.imperialVolumeValue = 35.314 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'floz')
		        {
		            $scope.ucc.imperialVolumeValue = 35195.0085 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'pt')
		        {
		            $scope.ucc.imperialVolumeValue = 1759.75 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'gal')
		        {
		            $scope.ucc.imperialVolumeValue = 219.96 * $scope.ucc.metricVolumeValue;
		        }
		    } else if (ucc.selected_metric_volume_unit.unit_code == 'l') {
		        if (ucc.selected_imperial_volume_unit.unit_code == 'in3')
		        {
		            $scope.ucc.imperialVolumeValue = 61.023 * $scope.ucc.metricVolumeValue;
		        } 
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'ft3')
		        {
		            $scope.ucc.imperialVolumeValue = .353 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'floz')
		        {
		            $scope.ucc.imperialVolumeValue = 35.195 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'pt')
		        {
		            $scope.ucc.imperialVolumeValue = 1.759 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'gal')
		        {
		            $scope.ucc.imperialVolumeValue = .2199 * $scope.ucc.metricVolumeValue;
		        }
		    } else if (ucc.selected_metric_volume_unit.unit_code == 'hl') {
		        if (ucc.selected_imperial_volume_unit.unit_code == 'in3')
		        {
		            $scope.ucc.imperialVolumeValue = 6102.3759 * $scope.ucc.metricVolumeValue;
		        } 
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'ft3')
		        {
		            $scope.ucc.imperialVolumeValue = 3.5314 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'floz')
		        {
		            $scope.ucc.imperialVolumeValue = 3519.50085 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'pt')
		        {
		            $scope.ucc.imperialVolumeValue = 175.975 * $scope.ucc.metricVolumeValue;
		        }
		        else if (ucc.selected_imperial_volume_unit.unit_code == 'gal')
		        {
		            $scope.ucc.imperialVolumeValue = 21.996 * $scope.ucc.metricVolumeValue;
		        }
		    }
		    
        };
        
        $scope.changeVolume2 = function() {
		    if (ucc.selected_imperial_volume_unit2.unit_code == 'in3') {
		        if (ucc.selected_metric_volume_unit2.unit_code == 'cm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 16.387 * $scope.ucc.imperialVolumeValue2;
		        } 
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'dm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .0163 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 1.638 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'l')
		        {
		            $scope.ucc.metricVolumeValue2 = .0163 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'hl')
		        {
		            $scope.ucc.metricVolumeValue2 = .000163 * $scope.ucc.imperialVolumeValue2;
		        }
		    } else if (ucc.selected_imperial_volume_unit2.unit_code == 'ft3') {
		        if (ucc.selected_metric_volume_unit2.unit_code == 'cm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 28316.85 * $scope.ucc.imperialVolumeValue2;
		        } 
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'dm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 28.316 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .0283 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'l')
		        {
		            $scope.ucc.metricVolumeValue2 = 28.316 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'hl')
		        {
		            $scope.ucc.metricVolumeValue2 = .283 * $scope.ucc.imperialVolumeValue2;
		        }
		    } else if (ucc.selected_imperial_volume_unit2.unit_code == 'floz') {
		        if (ucc.selected_metric_volume_unit2.unit_code == 'cm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 28.413 * $scope.ucc.imperialVolumeValue2;
		        } 
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'dm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .0284 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 2.841 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'l')
		        {
		            $scope.ucc.metricVolumeValue2 = .0284 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'hl')
		        {
		            $scope.ucc.metricVolumeValue2 = .000284 * $scope.ucc.imperialVolumeValue2;
		        }
		    } else if (ucc.selected_imperial_volume_unit2.unit_code == 'pt') {
		        if (ucc.selected_metric_volume_unit2.unit_code == 'cm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 568.262 * $scope.ucc.imperialVolumeValue2;
		        } 
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'dm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .568 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .000568 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'l')
		        {
		            $scope.ucc.metricVolumeValue2 = .5682 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'hl')
		        {
		            $scope.ucc.metricVolumeValue2 = .00568 * $scope.ucc.imperialVolumeValue2;
		        }
		    } else if (ucc.selected_imperial_volume_unit2.unit_code == 'gal') {
		        if (ucc.selected_metric_volume_unit2.unit_code == 'cm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 4546.099 * $scope.ucc.imperialVolumeValue2;
		        } 
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'dm3')
		        {
		            $scope.ucc.metricVolumeValue2 = 4.546 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'm3')
		        {
		            $scope.ucc.metricVolumeValue2 = .00454 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'l')
		        {
		            $scope.ucc.metricVolumeValue2 = 4.546 * $scope.ucc.imperialVolumeValue2;
		        }
		        else if (ucc.selected_metric_volume_unit2.unit_code == 'hl')
		        {
		            $scope.ucc.metricVolumeValue2 = .0454 * $scope.ucc.imperialVolumeValue2;
		        }
		    }
		    
        };
		
		
		
	}
]);
