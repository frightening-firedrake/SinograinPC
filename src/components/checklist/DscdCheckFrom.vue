<template>
    <form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 10.4px; padding-top: 0px; border-top: 0px;"><span style="font-family: 黑体; font-size: 18pt;">真菌毒素检测记录</span></p>
				<table class="zw-table" data-node-id="node_07780984187701232" style="margin-left: 0in; direction: ltr; width: 6.375in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 0.83in;">
						<col style="width: 0.89in;">
						<col style="width: 1.07in;">
						<col style="width: 0.11in;">
						<col style="width: 0.38in;">
						<col style="width: 0.67in;">
						<col style="width: 0.82in;">
						<col style="width: 0.06in;">
						<col style="width: 0.39in;">
						<col style="width: 0.14in;">
						<col style="width: 0.39in;">
						<col style="width: 0.64in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">日 &nbsp;期</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.riqi|data}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">室温（℃）</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shiwen" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.shiwen:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">相对湿度</span></p>
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（%）</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.xiangduishidu" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiangduishidu:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">地点</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.08333; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">卫生检验室Ⅰ</span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">监{{formdatas.smallSampleNum}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品名称</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="5" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.sort}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测方法</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="10" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" :disabled='readonly'  name="jcff" value="LS/T6113-2015" />LS/T6113-2015 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" :disabled='readonly'  name="jcff" value="LS/T6111-2015" />LS/T6111-2015</span></p>
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" :disabled='readonly'  name="jcff" value="LS/T6112-2015" />LS/T6112-2015 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" :disabled='readonly'  name="jcff" value="LS/T6114-2015" />LS/T6114-2015 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px 0px 0px 0.0729167in; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">仪器设备</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">名 &nbsp;称</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_1" type="checkbox" class="check_checkbox" :disabled='readonly'  name="yqsb" true-value="2" false-value="1" />锤式旋风磨</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_2" type="checkbox" class="check_checkbox" :disabled='readonly'  name="yqsb" true-value="2" false-value="1" />真菌毒素快速检测系统</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">编 &nbsp;号</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="text-align:center; margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yiqishebei_bianhao_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="text-align:center; margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yiqishebei_bianhao_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">1</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">2</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">平均值</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">呕吐毒素</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.outudushu_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.outudushu_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.outudushu_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.outudushu_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{outudushu_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 0.666667px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">黄曲霉毒素</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.huangqumeidusu_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.huangqumeidusu_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.huangqumeidusu_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.huangqumeidusu_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{huangqumeidusu_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">玉米赤霉烯酮</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yumichimeixitong_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yumichimeixitong_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yumichimeixitong_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yumichimeixitong_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{yumichimeixitong_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">赭曲霉毒素</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.zhequmeidusu_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.zhequmeidusu_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.zhequmeidusu_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.zhequmeidusu_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{zhequmeidusu_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 0.666667px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 32.5333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">备 &nbsp; &nbsp;注</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="10" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 33.4px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.beizhu" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.beizhu:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgb(255, 255, 255);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="zw-footer">
				<p style=" width:48%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检 &nbsp;测</span><input v-model="formdatas.jiance" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.jiance:''}}</p>
				<p style=" width:48%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">校 &nbsp;核</span><input v-model="formdatas.jiaohe" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.jiaohe:''}}</p>
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"></p>
			</div>
			<div></div>
			<div></div>
		</div>
	</form>
</template>

<style>

</style>
<script>

//import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
export default {
  props: ['formdatas','readonly'],
  computed:{
	pingjunzhi() { 
//		var pingjunzhi = (this.formdatas.koh_rongyeyongliang_1-this.formdatas.kongbaishiyan_koh_yongliang)*this.formdatas.koh_rongyenongdu*56.1*50/25*100/(this.formdatas.shiyangzhiliang_1*(100-this.formdatas.shiyangzhiliang_1))*100;
//		return this.jsdjg.pingjunzhi = pingjunzhi.toFixed(1);
	},
	outudushu_pingjunzhi(){
		var outudushu_pingjunzhi = (this.formdatas.outudushu_1*1 + this.formdatas.outudushu_2*1)/2
		if(outudushu_pingjunzhi==0){
			outudushu_pingjunzhi=''
		}
		return this.jsdjg.outudushu_pingjunzhi = outudushu_pingjunzhi
	}, 
	huangqumeidusu_pingjunzhi(){
		var huangqumeidusu_pingjunzhi = (this.formdatas.huangqumeidusu_1*1 + this.formdatas.huangqumeidusu_2*1)/2
		if(huangqumeidusu_pingjunzhi==0){
			huangqumeidusu_pingjunzhi=''
		}
		return this.jsdjg.huangqumeidusu_pingjunzhi = huangqumeidusu_pingjunzhi
	},
	yumichimeixitong_pingjunzhi(){
		var yumichimeixitong_pingjunzhi = (this.formdatas.yumichimeixitong_1*1 + this.formdatas.yumichimeixitong_2*1)/2
		if(yumichimeixitong_pingjunzhi==0){
			yumichimeixitong_pingjunzhi=''
		}
		return this.jsdjg.yumichimeixitong_pingjunzhi = yumichimeixitong_pingjunzhi
	},
	zhequmeidusu_pingjunzhi(){
		var zhequmeidusu_pingjunzhi = (this.formdatas.zhequmeidusu_1*1 + this.formdatas.zhequmeidusu_2*1)/2
		if(zhequmeidusu_pingjunzhi==0){
			zhequmeidusu_pingjunzhi=''
		}
		return this.jsdjg.zhequmeidusu_pingjunzhi = zhequmeidusu_pingjunzhi
	},
    codeUrl(){
    	return this.apiRoot +'/grain/upload/smaBarcode/'+this.formdatas.smallSamplePic
    }
  },
  created(){
//	移除监听事件
    this.$root.eventHub.$off('printChecklist')
//	监听打印事件
  	this.$root.eventHub.$on("printChecklist",function(){  
		this.submit();

  	}.bind(this));
  },
  destroy(){
  	this.$root.eventHub.$off('printChecklist')
  },
  methods: {
	submit(){	
		for(var key in this.formdatas){
			if(!this.formdatas[key]){
				this.isEmpty=true;
				break
			}else{
				this.isEmpty=false;
			}
		}
		if(this.isEmpty){			
			this.$alert('请完善表内信息','提示信息',{});
		}else{			
			this.$emit('submit',this.jsdjg)
		}
	}

  },
  data() {
    return {
      isEmpty:false,

      gs1Url:'static/images/sys/gs1.jpg',
      gs2Url:'static/images/sys/gs2.jpg',
      mjxsf1Url:'static/images/sys/mjxsf1.png',

      jianyanbianhao_1:'1',
      jianyanbianhao_2:'2',
      jsdjg:{
//		yiqishebei_bianhao_1:'',
//    	yiqishebei_bianhao_2:'',
      }
    }
  },
  filters: {
   data:function (input) {
       var d = new Date(input);
       var year = d.getFullYear();
       var month = d.getMonth() + 1;
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
       var hour = d.getHours();
       var minutes = d.getMinutes();
       var seconds = d.getSeconds();
       return  year+ '-' + month + '-' + day;
//     return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
   }
  }
}
</script>

