<template>
    <form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 10.4px; padding-top: 0px; border-top: 0px;"><span style="font-family: 黑体; font-size: 18pt;">脂肪酸值测定记录</span></p>
				<p style="margin: 0px 0.291667in 0px 0px; line-height: 2.16667; text-indent: 4.22917in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">{{formdatas.table_version}}</span></p>
				<table class="zw-table" data-node-id="node_07020429866828573" style="direction: ltr; width: 6.40278in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 0.83in;">
						<col style="width: 1.39in;">
						<col style="width: 0.93in;">
						<col style="width: 0.82in;">
						<col style="width: 0.82in;">
						<col style="width: 0.47in;">
						<col style="width: 0.51in;">
						<col style="width: 0.62in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">日 &nbsp;期</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.riqi|data}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">室温（℃）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="formdatas.shiwen" type="text"  v-if='!readonly'/>{{readonly?formdatas.shiwen:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">相对湿度</span></p>
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（%）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check"  v-model="formdatas.xiangduishidu" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiangduishidu:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">地点</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">化学实验室</p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">监{{formdatas.smallSampleNum}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品名称</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.sort}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测方法</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">&nbsp;<input type="radio" class="check_checkbox" :disabled='readonly'  value="GB/T20569-2006附录A" v-model="formdatas.jiancefangfa" />GB/T20569-2006附录A &nbsp;&nbsp;<input type="radio" value="GB/T15684-" class="check_checkbox" :disabled='readonly'  v-model="formdatas.jiancefangfa" />GB/T15684- &nbsp;&nbsp;<input type="radio" class="check_checkbox" :disabled='readonly'  value="GB/T5510-" v-model="formdatas.jiancefangfa" />GB/T5510-</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">仪器设备</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">名 &nbsp;称</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input type="checkbox" class="check_checkbox" :disabled='readonly'  v-model="formdatas.yiqishebei_mingcheng_1"  true-value="2" false-value="1" name="yqsb"/>分析天平</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input type="checkbox" class="check_checkbox" :disabled='readonly'  v-model="formdatas.yiqishebei_mingcheng_2"  true-value="2" false-value="1" name="yqsb"/>滴定管</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">编 &nbsp;号</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="text-align:center; margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="formdatas.yiqishebei_bianhao_1" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="text-align:center; margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check"  v-model="formdatas.yiqishebei_bianhao_2" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="jianyanbianhao_1" type="text"  v-if='!readonly'/>{{readonly?jianyanbianhao_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="jianyanbianhao_2" type="text"  v-if='!readonly'/>{{readonly?jianyanbianhao_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">试样质量m（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model.number="formdatas.shiyangzhiliang_1"  type="text"  v-if='!readonly'/>{{readonly?formdatas.shiyangzhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="formdatas.shiyangzhiliang_2" type="text"  v-if='!readonly'/>{{readonly?formdatas.shiyangzhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">试样水分W（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="formdatas.shiyangshuifen" type="text"  v-if='!readonly'/>{{readonly?formdatas.shiyangshuifen:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">KOH溶液浓度c（mol/L)</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model.number="formdatas.koh_rongyenongdu"  type="text"  v-if='!readonly'/>{{readonly?formdatas.koh_rongyenongdu:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">滴定终点读数V</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">2</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（mL）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check"  v-model="formdatas.didingzhongdiandushu_1" type="text"  v-if='!readonly'/>{{readonly?formdatas.didingzhongdiandushu_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model="formdatas.didingzhongdiandushu_2" type="text"  v-if='!readonly'/>{{readonly?formdatas.didingzhongdiandushu_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">滴定起始读数V</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">1</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（mL）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.didingqishidushu_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.didingqishidushu_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.didingqishidushu_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.didingqishidushu_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">KOH溶液用量V（mL）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.koh_rongyeyongliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.koh_rongyeyongliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.koh_rongyeyongliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.koh_rongyeyongliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">空白试验KOH用量V</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">0</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（mL）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.kongbaishiyan_koh_yongliang" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.kongbaishiyan_koh_yongliang:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">计算公式</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; overflow: hidden;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"></p>
									<img :src="gs1Url" class="gongshi" alt="" />
									<p></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; letter-spacing: -0.7pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt; letter-spacing: -0.7pt;">脂肪酸值（mgKOH/100g干基）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; letter-spacing: -0.7pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{zhifangsuanzhi_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{zhifangsuanzhi_2}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">平均值（mgKOH/100g干基）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input type="radio" value="平行差" v-model="formdatas.pingxingcha_xiangduicha" class="check_checkbox" :disabled='readonly'  name="cha"/>平行差 &nbsp;<input type="radio" value="相对差" v-model="formdatas.pingxingcha_xiangduicha" class="check_checkbox" :disabled='readonly'  name="cha"/>相对差（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check"  v-model="formdatas.pingxingcha_xiangduicha_zhi" type="text"  v-if='!readonly'/>{{readonly?formdatas.pingxingcha_xiangduicha_zhi:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">备 &nbsp; &nbsp;注</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input class="check" v-model="formdatas.beizhu" type="text" />{{readonly?formdatas.beizhu:''}}</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
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
	
	zhifangsuanzhi_1(){
		var zhifangsuanzhi_1 = (this.formdatas.koh_rongyeyongliang_1-this.formdatas.kongbaishiyan_koh_yongliang)*this.formdatas.koh_rongyenongdu*56.1*50/25*100/(this.formdatas.shiyangzhiliang_1*(100-this.formdatas.shiyangshuifen))*100;
		if(!isNaN(zhifangsuanzhi_1)){
			return this.jsdjg.zhifangsuanzhi_1 = this.round(zhifangsuanzhi_1,1);		
		}
		return this.jsdjg.zhifangsuanzhi_1='';
	},
	zhifangsuanzhi_2(){
		var zhifangsuanzhi_2 = (this.formdatas.koh_rongyeyongliang_2-this.formdatas.kongbaishiyan_koh_yongliang)*this.formdatas.koh_rongyenongdu*56.1*50/25*100/(this.formdatas.shiyangzhiliang_2*(100-this.formdatas.shiyangshuifen))*100;
		if(!isNaN(zhifangsuanzhi_2)){
			return this.jsdjg.zhifangsuanzhi_2 = this.round(zhifangsuanzhi_2,1);		
		}
		return this.jsdjg.zhifangsuanzhi_2='';
	},
	pingjunzhi() { 
//		var zhifangsuanzhi_1 = (this.formdatas.koh_rongyeyongliang_1-this.formdatas.kongbaishiyan_koh_yongliang)*this.formdatas.koh_rongyenongdu*56.1*50/25*100/(this.formdatas.shiyangzhiliang_1*(100-this.formdatas.shiyangshuifen))*100;
		var zhifangsuanzhi_1 = this.zhifangsuanzhi_1*1;
//		var zhifangsuanzhi_2 = (this.formdatas.koh_rongyeyongliang_2-this.formdatas.kongbaishiyan_koh_yongliang)*this.formdatas.koh_rongyenongdu*56.1*50/25*100/(this.formdatas.shiyangzhiliang_2*(100-this.formdatas.shiyangshuifen))*100;
		var zhifangsuanzhi_2 = this.zhifangsuanzhi_2*1;
		var pingjunzhi=(zhifangsuanzhi_1+zhifangsuanzhi_2)/2;
		if(!isNaN(pingjunzhi)){
			return this.jsdjg.pingjunzhi = this.round(pingjunzhi,1);		
		}
		return this.jsdjg.pingjunzhi='';
	},
    codeUrl(){
    	return this.apiRoot +'/grain/upload/smaBarcode/'+this.formdatas.smallSamplePic
    },
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
//		for(var key in this.formdatas){
//			if(!this.formdatas[key]){
//				this.isEmpty=true;
//				break
//			}else{
//				this.isEmpty=false;
//			}
//		}
		if(this.isEmpty){			
			this.$alert('请完善表内信息','提示信息',{});
		}else{			
			this.$emit('submit',this.jsdjg)
		}
	},
	round(num, digit){
	    var ratio = Math.pow(10, digit),
	        _num = num * ratio,//倍数
	        mod = _num % 1,//指定位置后小数
	        integer = Math.floor(_num);//指定位向下取整
//	        console.log(mod,integer)
	    if(num===''){
	        return ''
	    }else if(Math.floor(num)== num){
	    	var str;
	    	if(digit==0){
	    		str=num;
	    	}else{
		    	str=num+'.';
		        for (var i=0;i<digit;i++){
					str+='0'
				}
	    	}
	        return str
	    }else if(mod > 0.5){
	        return ((integer + 1) / ratio).toFixed(digit);
	    }else if(mod < 0.5){
	    	if(integer / ratio==0){
	        	var str='0.';
		        for (var i=0;i<digit;i++){
					str+='0'
				}
		        return str
	    	}else{
	        	return (integer / ratio).toFixed(digit);
	    	}
	    }else{
	        return ((integer % 2 === 0 ? integer : integer + 1) / ratio).toFixed(digit);
	    }
	},

  },
  data() {
    return {
      isEmpty:false,

      gs1Url:'static/images/sys/gs1.jpg',
      yangpinbianhao:'9527',
      yangpinmingcheng:'666',
      jianyanbianhao_1:'1',
      jianyanbianhao_2:'2',
      jsdjg:{

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
<!--<input type="checkbox" class="check_checkbox" :disabled='readonly'  v-model="formdatas.yiqishebei_mingcheng_2"  true-value="2" false-value="1" name="yqsb"/>-->
