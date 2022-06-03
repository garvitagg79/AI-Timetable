import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

// alpha +20%
// beta -30%
// delta +5%

const Resulti = ({ navigation }) => {
  if (global.MyVar === "Study") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 8.75) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Sleep") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 7) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Reading") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 0.5) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Food") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 1.13) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Assignment") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Meet Up") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  if (global.MyVar === "Extra") {
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Passionate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.05;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Procastinate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "Yes" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "Yes"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins + totalmins * 0.2;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
    if (
      global.Mycat === "Moderate" &&
      global.Myimp === "No" &&
      global.Myurg === "No"
    ) {
      var final = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(2);
      var hours1 = (
        (parseFloat(global.MyMax) + parseFloat(global.Mypro) + 2) /
        3
      ).toFixed(0);
      if (final - hours1 < 0.5 && final - hours1 >= 0) {
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      if (final - hours1 >= -0.5 && final - hours1 < 0) {
        hours1 = hours1 - 1;
        var minutes1 = (60 * (final - hours1)).toFixed(0);
      }
      var totalmins = parseInt(hours1) * 60 + parseInt(minutes1);
      var minsAfterchange = totalmins - totalmins * 0.3;
      var final2 = (minsAfterchange / 60).toFixed(2);
      var hours = (minsAfterchange / 60).toFixed(0);
      if (final2 - hours < 0.5 && final2 - hours >= 0) {
        var minutes = minsAfterchange - 60 * hours;
      }
      if (final2 - hours >= -0.5 && final2 - hours < 0) {
        hours = hours - 1;
        var minutes = (minsAfterchange - 60 * hours).toFixed(0);
      }
    }
  }

  return (
    <>
      <View style={styles.container}>
        <>
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                {hours} hours {minutes} minutes
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.option}>Add Task</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.option}>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </View>
    </>
  );
};

export default Resulti;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
