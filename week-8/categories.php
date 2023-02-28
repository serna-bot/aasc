<?php

class typeOfDrink
{
    public $type;
    public $drinks;

    function set_type($arg) {
        $this->type = $arg;
    }
    function set_drinks($arg) {
        $this->drinks = $arg;
    }
}

class indivDrink 
{
    public $type;
    public $drink;
    function set_type($arg) {
        $this->type = $arg;
    }
    function set_drink($arg) {
        $this->drink = $arg;
    }
}

$obj_tea = new typeOfDrink;
$obj_tea -> set_type("tea");
$obj_tea -> set_drinks(array("earl gray", "matcha", "rose", "honey lemon", "mango green"));

$obj_smoothie = new typeOfDrink;
$obj_smoothie -> set_type("smootie");
$obj_smoothie -> set_drinks(array("mango", "berry", "strawberry","peach", "avocado"));

$obj_coffee = new typeOfDrink;
$obj_coffee -> set_type("coffee");
$obj_coffee ->set_drinks(array("matcha", "latte", "caramel latte", "machiatto", "cat poo"));

$categories = array($obj_tea, $obj_smoothie, $obj_coffee);

function search_drinks($categories, $searchParam) {
    $ret_list  = array();
    //filter by the category
    foreach ($categories as $category) {
        if (str_starts_with(strtolower($category -> type), strtolower($searchParam))) {
            foreach ($category->drinks as $drink) {
                $temp_obj = new indivDrink;
                $temp_obj -> set_type($category -> type);
                $temp_obj -> set_drink($drink);
                array_push($ret_list, $temp_obj);
                echo ' Pushed ' . $temp_obj->type . ': ' . $temp_obj->drink . '   ';
            }
        }
        else {
            foreach ($category->drinks as $drink) {
                if (str_starts_with(strtolower($drink), strtolower($searchParam))) {
                    $temp_obj = new indivDrink;
                    $temp_obj -> set_type($category -> type);
                    $temp_obj -> set_drink($drink);
                    array_push($ret_list, $temp_obj);
                    echo ' Pushed ' . $temp_obj->type . ': ' . $temp_obj->drink . '   ';
                }
            }
        }
    }
    //filter by singular items
    if (!$ret_list) return "No results";
    return $ret_list;
}

search_drinks($categories, "s");


?>