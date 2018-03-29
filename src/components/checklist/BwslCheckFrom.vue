<template>
    <form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">杂质 &nbsp;不完善粒测定记录</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;SXZCZJ/JL002-2015</span></p>
				<table class="zw-table" data-node-id="node_05791668862675468" style="margin-left: 0;direction: ltr;width: 6.40278in;border-collapse: collapse;">
					<colgroup>
						<col style="width: 0.95in;">
						<col style="width: 0.95in;">
						<col style="width: 0.88in;">
						<col style="width: 0.79in;">
						<col style="width: 1.21in;">
						<col style="width: 0.53in;">
						<col style="width: 0.48in;">
						<col style="width: 0.62in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">日 &nbsp;期</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.riqi|data}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">室温（℃）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shiwen" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.shiwen:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">相对湿度</span></p>
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（%）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.xiangduishidu" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiangduishidu:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">地点</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 22px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">物理</span></p>
									<p style="margin: 0px; line-height: 1.08333; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">实验室</span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">监{{formdatas.smallSampleNum}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品名称</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{formdatas.sort}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测方法</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2;  font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">&nbsp;<input  v-model="formdatas.jiancefangfa" type="radio" :disabled="readonly" class="check_checkbox" name="jcff" value="GB/T5494—2008" />GB/T5494—2008</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">仪器设备</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">名 称</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_1" type="checkbox" :disabled="readonly" class="check_checkbox" name="yqsb" true-value="2" false-value="1" />分析天平</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_2" type="checkbox" :disabled="readonly" class="check_checkbox" name="yqsb" true-value="2" false-value="1" />天平</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_3" type="checkbox" :disabled="readonly" class="check_checkbox" name="yqsb" true-value="2" false-value="1" />筛选器</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">编 号</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="jsdjg.yiqishebei_bianhao_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="jsdjg.yiqishebei_bianhao_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="jsdjg.yiqishebei_bianhao_3" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.yiqishebei_bianhao_3:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">1</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">2</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">计算公式</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px;line-height: 1.2;text-align: center;font-family: 仿宋_GB2312;font-size: 10.5pt;/* font-weight: bold; */color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">大样质量m（</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; font-weight: bold; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.dayangzhiliang_1" v-if='!readonly' class="check" type="text"  />{{readonly?formdatas.dayangzhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.dayangzhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.dayangzhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 0.666667px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">大样杂质质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">1</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.dayangzazhizhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.dayangzazhizhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input  v-model.number="formdatas.dayangzazhizhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.dayangzazhizhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">大样杂质含量M（</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{dayangzazhihanliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{dayangzazhihanliang_2}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 40.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="bwsf1Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">大样杂质含量平均值（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{dayangzazhihanliang_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 0.666667px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">小样质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">2</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.xiaoyangzhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiaoyangzhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.xiaoyangzhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiaoyangzhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">小样杂质质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">3</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.xiaoyangzazhizhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiaoyangzazhizhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.xiaoyangzazhizhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.xiaoyangzazhizhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">小样杂质含量N（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{xiaoyangzazhihanliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{xiaoyangzazhihanliang_2}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="bwsf2Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">小样杂质含量平均值（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{xiaoyangzazhihanliang_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.4667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">矿物质质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">4</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.kuangwuzhizhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.kuangwuzhizhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.kuangwuzhizhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.kuangwuzhizhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.6px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">矿物质含量A（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{kuangwuzhihanliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{kuangwuzhihanliang_2}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="bwsf3Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 9pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 9pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">矿物质含量平均值（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{kuangwuzhihanliang_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">杂质总量B（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{zazhizongliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">B</span><span style="font-family: 仿宋_GB2312; font-size: 9pt;">＝</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">M＋N</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">不完善粒质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">5</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.buwanshanlizhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.buwanshanlizhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.buwanshanlizhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.buwanshanlizhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">不完善粒含量C（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{buwanshanlihanliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{buwanshanlihanliang_2}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="bwsf4Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.2px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">不完善粒含量平均值（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.2px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{buwanshanlihanliang_pingjunzhi_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="1" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.2px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{buwanshanlihanliang_pingjunzhi_2}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly' /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.2px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">生霉粒质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">6</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.shengmeilizhiliang_1" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.shengmeilizhiliang_1:''}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.shengmeilizhiliang_2" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.shengmeilizhiliang_2:''}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 27.1333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">生霉粒含量D（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{shengmeilihanliang_1}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{shengmeilihanliang_2}}</p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="bwsf5Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.145833in; text-align: left; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">生霉粒含量平均值（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{shengmeilihanliang_pingjunzhi}}</p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">备 &nbsp; 注</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 24.8px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input class="check" type="text" v-if='!readonly' v-model="formdatas.beizhu" />{{readonly?formdatas.beizhu:''}}</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 0px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
			<div class="zw-footer">
				<p style=" width:30%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检 &nbsp;测</span><input v-model="formdatas.fenyangjiance" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.fenyangjiance:''}}</p>
				<p style=" width:40%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">不完善粒、杂质检测</span><input v-model="formdatas.buwanshanli_zazhi_jiance" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.buwanshanli_zazhi_jiance:''}}</p>
				<p style=" width:25%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">校 &nbsp;核</span><input v-model="formdatas.jiaohe" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.jiaohe:''}}</p>
			</div>
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
	dayangzazhihanliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		if(!isNaN(dayangzazhihanliang_1)){
			return this.jsdjg.dayangzazhihanliang_1 = dayangzazhihanliang_1.toFixed(1);		
		}
		return this.jsdjg.dayangzazhihanliang_1='';
	},
	dayangzazhihanliang_2(){
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		if(!isNaN(dayangzazhihanliang_2)){
			return this.jsdjg.dayangzazhihanliang_2 = dayangzazhihanliang_2.toFixed(1);		
		}
		return this.jsdjg.dayangzazhihanliang_2='';
	},
	dayangzazhihanliang_pingjunzhi(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var dayangzazhihanliang_pingjunzhi=(dayangzazhihanliang_1+dayangzazhihanliang_2)/2
		if(!isNaN(dayangzazhihanliang_pingjunzhi)){
			return this.jsdjg.dayangzazhihanliang_pingjunzhi = dayangzazhihanliang_pingjunzhi.toFixed(1);		
		}
		return this.jsdjg.dayangzazhihanliang_pingjunzhi='';
	},
	xiaoyangzazhihanliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var xiaoyangzazhihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.xiaoyangzazhizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		if(!isNaN(xiaoyangzazhihanliang_1)){
			return this.jsdjg.xiaoyangzazhihanliang_1 = xiaoyangzazhihanliang_1.toFixed(1);		
		}
		return this.jsdjg.xiaoyangzazhihanliang_1='';
	},
	xiaoyangzazhihanliang_2(){
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var xiaoyangzazhihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.xiaoyangzazhizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		if(!isNaN(xiaoyangzazhihanliang_2)){
			return this.jsdjg.xiaoyangzazhihanliang_2 = xiaoyangzazhihanliang_2.toFixed(1);		
		}
		return this.jsdjg.xiaoyangzazhihanliang_2='';
	},
	xiaoyangzazhihanliang_pingjunzhi(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var xiaoyangzazhihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.xiaoyangzazhizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var xiaoyangzazhihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.xiaoyangzazhizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		var xiaoyangzazhihanliang_pingjunzhi=(xiaoyangzazhihanliang_1+xiaoyangzazhihanliang_2)/2
		if(!isNaN(xiaoyangzazhihanliang_pingjunzhi)){
			return this.jsdjg.xiaoyangzazhihanliang_pingjunzhi = xiaoyangzazhihanliang_pingjunzhi.toFixed(1);		
		}
		return this.jsdjg.xiaoyangzazhihanliang_pingjunzhi='';
	},
	kuangwuzhihanliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var kuangwuzhihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.kuangwuzhizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		if(!isNaN(kuangwuzhihanliang_1)){
			return this.jsdjg.kuangwuzhihanliang_1 = kuangwuzhihanliang_1.toFixed(1);		
		}
		return this.jsdjg.kuangwuzhihanliang_1='';
	},
	kuangwuzhihanliang_2(){
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var kuangwuzhihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.kuangwuzhizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		if(!isNaN(kuangwuzhihanliang_2)){
			return this.jsdjg.kuangwuzhihanliang_2 = kuangwuzhihanliang_2.toFixed(1);		
		}
		return this.jsdjg.kuangwuzhihanliang_2='';
	},
	kuangwuzhihanliang_pingjunzhi(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var kuangwuzhihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.kuangwuzhizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var kuangwuzhihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.kuangwuzhizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		var kuangwuzhihanliang_pingjunzhi=(kuangwuzhihanliang_1+kuangwuzhihanliang_2)/2
		if(!isNaN(kuangwuzhihanliang_pingjunzhi)){
			return this.jsdjg.kuangwuzhihanliang_pingjunzhi = kuangwuzhihanliang_pingjunzhi.toFixed(1);		
		}
		return this.jsdjg.kuangwuzhihanliang_pingjunzhi='';
	},
	zazhizongliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var xiaoyangzazhihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.xiaoyangzazhizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var zazhizongliang_1=dayangzazhihanliang_1+xiaoyangzazhihanliang_1
		if(!isNaN(zazhizongliang_1)){
			return this.jsdjg.zazhizongliang_1 = zazhizongliang_1.toFixed(1);		
		}
		return this.jsdjg.zazhizongliang_1='';
	},
	buwanshanlihanliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var buwanshanlihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.buwanshanlizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		if(!isNaN(buwanshanlihanliang_1)){
			return this.jsdjg.buwanshanlihanliang_1 = buwanshanlihanliang_1.toFixed(1);		
		}
		return this.jsdjg.buwanshanlihanliang_1='';
	},
	buwanshanlihanliang_2(){
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var buwanshanlihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.buwanshanlizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		if(!isNaN(buwanshanlihanliang_2)){
			return this.jsdjg.buwanshanlihanliang_2 = buwanshanlihanliang_2.toFixed(1);		
		}
		return this.jsdjg.buwanshanlihanliang_2='';
	},
	buwanshanlihanliang_pingjunzhi_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var buwanshanlihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.buwanshanlizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var buwanshanlihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.buwanshanlizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		var buwanshanlihanliang_pingjunzhi_1=(buwanshanlihanliang_1+buwanshanlihanliang_2)/2;
		if(!isNaN(buwanshanlihanliang_pingjunzhi_1)){
			return this.jsdjg.buwanshanlihanliang_pingjunzhi_1 = buwanshanlihanliang_pingjunzhi_1.toFixed(1);		
		}
		return this.jsdjg.buwanshanlihanliang_pingjunzhi_1='';
	},
	buwanshanlihanliang_pingjunzhi_2(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var buwanshanlihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.buwanshanlizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var buwanshanlihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.buwanshanlizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		var buwanshanlihanliang_pingjunzhi_2=(buwanshanlihanliang_1+buwanshanlihanliang_2)/2;
		if(!isNaN(buwanshanlihanliang_pingjunzhi_2)){
			return this.jsdjg.buwanshanlihanliang_pingjunzhi_2 = buwanshanlihanliang_pingjunzhi_2.toFixed(1);		
		}
		return this.jsdjg.buwanshanlihanliang_pingjunzhi_2='';
	},
	shengmeilihanliang_1(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var shengmeilihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.shengmeilizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		if(!isNaN(shengmeilihanliang_1)){
			return this.jsdjg.shengmeilihanliang_1 = shengmeilihanliang_1.toFixed(1);		
		}
		return this.jsdjg.shengmeilihanliang_1='';
	},
	shengmeilihanliang_2(){
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var shengmeilihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.shengmeilizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		if(!isNaN(shengmeilihanliang_2)){
			return this.jsdjg.shengmeilihanliang_2 = shengmeilihanliang_2.toFixed(1);		
		}
		return this.jsdjg.shengmeilihanliang_2='';
	},
	shengmeilihanliang_pingjunzhi(){
		var dayangzazhihanliang_1=this.formdatas.dayangzazhizhiliang_1/this.formdatas.dayangzhiliang_1*100;
		var shengmeilihanliang_1=(100-dayangzazhihanliang_1)*this.formdatas.shengmeilizhiliang_1/this.formdatas.xiaoyangzhiliang_1;
		var dayangzazhihanliang_2=this.formdatas.dayangzazhizhiliang_2/this.formdatas.dayangzhiliang_2*100;
		var shengmeilihanliang_2=(100-dayangzazhihanliang_2)*this.formdatas.shengmeilizhiliang_2/this.formdatas.xiaoyangzhiliang_2;
		var shengmeilihanliang_pingjunzhi=(shengmeilihanliang_1+shengmeilihanliang_2)/2;
		if(!isNaN(shengmeilihanliang_pingjunzhi)){
			return this.jsdjg.shengmeilihanliang_pingjunzhi = shengmeilihanliang_pingjunzhi.toFixed(1);		
		}
		return this.jsdjg.shengmeilihanliang_pingjunzhi='';
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
				if(this.formdatas[key]!==0){
					this.isEmpty=true;
					break					
				}else{
					this.isEmpty=false;
				}
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
	  bwsf1Url:'static/images/sys/bwsf1.png',
      bwsf2Url:'static/images/sys/bwsf2.png',
      bwsf3Url:'static/images/sys/bwsf3.png',
      bwsf4Url:'static/images/sys/bwsf4.png',
      bwsf5Url:'static/images/sys/bwsf5.png',
      jianyanbianhao_1:'1',
      jianyanbianhao_2:'2',
      jsdjg:{
		yiqishebei_bianhao_1:'',
      	yiqishebei_bianhao_2:'',
      	yiqishebei_bianhao_3:'',
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
