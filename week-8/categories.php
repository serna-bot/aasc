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
$searchParam  = $_POST['search'];

function matchstr($str1, $str2) {
    $str_arr = explode(" ", $str1, PHP_INT_MAX);
    $min_len = 3;
    foreach ($str_arr as $str) {
        if (str_starts_with(strtolower($str), strtolower($str2))) return true;
        else if (str_contains(strtolower($str), strtolower($str2)) && (strlen($str2) >= $min_len)) return true;
    }
    return false;
}

function search_drinks($categories, $searchParam) {
    $ret_list  = array();
    //filter by the category
    foreach ($categories as $category) {
        if (matchstr($category->type, $searchParam)) {
            foreach ($category->drinks as $drink) {
                $temp_obj = new indivDrink;
                $temp_obj -> set_type($category -> type);
                $temp_obj -> set_drink($drink);
                array_push($ret_list, $temp_obj);
            }
        }
        else {
            foreach ($category->drinks as $drink) {
                if (matchstr($drink, $searchParam)) {
                    $temp_obj = new indivDrink;
                    $temp_obj -> set_type($category -> type);
                    $temp_obj -> set_drink($drink);
                    array_push($ret_list, $temp_obj);
                }
            }
        }
    }
    //filter by singular items
    if (!$ret_list) echo "{\"retAll\":false,\"data\":". "\"No results\"" . "}";
    else {
        $myJSON = json_encode($ret_list);
        echo "{\"retAll\":false,\"data\":". $myJSON . "}";
    }
}

if ($searchParam === null || trim($searchParam) === '') {
    $myJSON = json_encode($categories);
    echo "{\"retAll\":true,\"data\":". $myJSON . "}";
}
else search_drinks($categories, $searchParam);
?>